<?php


namespace calderawp\CalderaCacheGenerator;


class CachePostsJob extends \WP_Queue\Job
{
	protected $postType;
	protected $page;
	protected $cacheDir;
	public function __construct($postType,$page,$cacheDir)
	{
		$this->postType = $postType;
		$this->page = $page;
		$this->cacheDir = $cacheDir;
	}

	public function handle(){
		$query = new \WP_Query( array (
			'post_type' => $this->postType,
			'fields' => 'ids',
			'page' => $this->page
		));
		foreach ($query->posts  as $post ){
			wp_queue()->push(new CachePostJob($post->ID, $this->cacheDir));
		}

	}
}
