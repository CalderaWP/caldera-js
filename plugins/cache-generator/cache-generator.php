<?php
/**
 * Plugin Name: Caldera Cache Generator
 */


add_action('plugins_loaded', function () {
	//include autoloader
	include_once __DIR__ . '/vendor/autoload.php';
	workQueue(10,3);
	$dir = dirname(__FILE__,4) . '/wp-json-cache';
});


add_filter( 'wp_queue_default_connection', function() {
	return 'sync';
} );


class Config {
	public static function getCacheDir(){
		return dirname(__FILE__,4) . '/wp-json-cache';
	}
}

add_action( 'save_post', function( $postId ) {
	(new \calderawp\CalderaCacheGenerator\CachePostJob( $postId, Config::getCacheDir() ) )->handle();
});

function workQueue( $jobs = 10, $attemptsPerJob = 3 ){
	//Get a properly configured queue
	$queue = wp_queue();
	//Get the worker for the queue
	$worker = $queue->worker($attemptsPerJob);

	//Loop through jobs in queue until we've done the number passed in $jobs
	// or no jobs left to run
	$totalJobs = 0;
	while( $worker->process() && $jobs <= $totalJobs ){
		$totalJobs++;
	}
	//Work the queue and
	return rest_ensure_response( [ 'totalJobs' => $totalJobs ] );

}

add_action( 'rest_api_init', function(){
	$namespace = 'api/v1';
	register_rest_route( $namespace, 'queue/run', [
		'methods' => ['POST', 'GET' ],
		'callback' => 'workQueue'
	]);

	register_rest_route($namespace, 'generate/posts', [
		'methods' => ['POST', 'GET' ],
		'args' => [
			'post_type' => [
				'default' => 'enum',

			]
		],
		'callback' => function($request){
			$query = new \WP_Query( array (
				'post_type' => 'post',
				'fields' => 'ids'
			));
			$maxPages = $query->max_num_pages;
			for( $page = 1; $page <= $maxPages; $page ++ ){
				wp_queue()->push(
					new \calderawp\CalderaCacheGenerator\CachePostsJob(
						$request->get_param('post_type'),
						$page,
						Config::getCacheDir()
					)
				);
			}
			return rest_ensure_response(['pages' => $page, 'maxPages' => $maxPages ]);
		}
	]);
});


