<?php


namespace calderawp\CalderaCacheGenerator;


use calderawp\CalderaCacheGenerator\Traits\CachesPost;

class CachePostJob extends \WP_Queue\Job
{
	use CachesPost;

	public function __construct( $postId,$cacheDir )
	{
		$this->postId = $postId;
		$this->cacheDir =$cacheDir;
	}


}
