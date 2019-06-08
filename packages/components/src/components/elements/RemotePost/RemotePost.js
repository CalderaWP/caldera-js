import React, { Fragment } from "react";
import { postPropTypes } from "./propTypes";
import EmbedContainer from "react-oembed-container";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * Show a WordPress post from the REST API with embeds allowed
 *
 * @param {Object} props
 * @return {*}
 * @constructor
 */
export const RemotePost = ({
	post, //WordPress post
	showFullContent, //false show excerpt
	className, //extra class name for wrapper component
}) => {
	return (
		<EmbedContainer markup={post.content.rendered}>
			<article
				className={classNames(
					className,
					post.type,
					`post-${post.id}`,
					`type-${post.type}`,
					`status-${post.status}`,
					"hentry entry" //I need to return post_class or something from REST API??
				)}
				id={`post-${post.id}`}
			>
				<header className="entry-header">
					<h1 className="entry-title">{post.title.rendered}</h1>
				</header>
				<Fragment>
					{showFullContent ? (
						<div
							className="entry-content"
							dangerouslySetInnerHTML={{
								__html: post.content.rendered,
							}}
						/>
					) : (
						<div
							className="entry-excerpt"
							dangerouslySetInnerHTML={{
								__html: post.excerpt.rendered,
							}}
						/>
					)}
				</Fragment>
			</article>
		</EmbedContainer>
	);
};

RemotePost.propTypes = {
	...postPropTypes,
	className: PropTypes.string,
	showFullContent: PropTypes.bool,
};

RemotePost.defaultPosts = {
	showFullContent: false,
};
