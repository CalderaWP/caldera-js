import {Component, Fragment} from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

export default class extends Component {
	static async getInitialProps({req, query}) {
			const {layoutId,formId,entryId} = req.query;
			console.log(layoutId);
			const res = await fetch(`http://localhost:3000/wp-json/caldera-api/v1/messages?layoutId=${layoutId}&entryId=${entryId}&formId=${formId}`, {
				headers: {Accept: 'application/json'}
			});
			const json = await res.json();
			return {message: json}

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
					<title>Message Preview</title>
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
