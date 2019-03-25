<?php


namespace calderawp\CalderaCacheGenerator\Traits;


trait CachesPost
{

	protected $postId;
	protected $cacheDir;
	public function handle() {
		$post = get_post( $this->postId );
		if( ! in_array( get_post_type($post), [ 'post', 'page' ]) ){
			return;
		}
		$controller = new \WP_REST_Posts_Controller( 'post' );
		$route = sprintf('wp/v2/%s/%d', get_post_type($post), $this->postId );
		$request = new \WP_REST_Request('GET', $route);
		$request->set_param( 'id', $this->postId );
		$response = $controller->get_item($request );
		$name = sprintf( '%s/%s/%s.json', $this->cacheDir, get_post_type($post), $post->post_name );
		file_put_contents( $name, json_encode( $response ) );
		return $name;
	}
}
