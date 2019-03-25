<?php
/**
 * @package Hello_Dolly
 * @version 1.7.1
 */
/*
Plugin Name: HI Roy
Plugin URI: https://hiroy.club
Description: This is just a plugin
Author: Matt Mullenweg
Version: 1.7.1
Author URI: https://roysivan.com
*/


// This just echoes the chosen line, we'll position it later
function hello_dolly() {
	echo "<p id='dolly'>Hi Roy</p>";
}

// Now we set that function up to execute when the admin_notices action is called
add_action( 'admin_notices', 'hello_dolly' );

// We need some CSS to position the paragraph
function dolly_css() {
	// This makes sure that the positioning is also good for right-to-left languages
	$x = is_rtl() ? 'left' : 'right';

	echo "
	<style type='text/css'>
	#dolly {
		float: $x;
		padding-$x: 15px;
		padding-top: 5px;		
		margin: 0;
		font-size: 11px;
	}
	.block-editor-page #dolly {
		display: none;
	}
	</style>
	";
}

add_action( 'admin_head', 'dolly_css' );


