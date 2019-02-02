import {Component, Fragment} from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

export default class extends Component {
	static async getInitialProps({req, query}) {
		const isServer = !!req;
		if (isServer) {
			return {message: query.itemData}
		} else {
			const res = await fetch('/_data/message', {
				headers: {Accept: 'application/json'}
			});
			const json = await res.json();
			return {message: json}
		}
	}

	createMarkup = () => {
		const {message} = this.props;
		return {__html: message.content.rendered};
	};

	cssUrl = () => {
		const {message} = this.props;
		return message.cssUrl;
	};

	render() {

		return (
			<Fragment>
				<Head>
					<title>My page title</title>
					<link rel="stylesheet" id="wp-styles" href={this.cssUrl()} type="text/css" media="all" />
					<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
				</Head>
				<div className='item'>
					<div>
						<Link href='/'>
							<a>Back Home</a>
						</Link>
					</div>
					<div dangerouslySetInnerHTML={this.createMarkup()}/>


				</div>
			</Fragment>

	)
	}
	}
