import React, {useEffect,useState} from 'react';
import {storiesOf} from '@storybook/react';
import {
	MailChimpForm,
	MailChimpSurveyForm,
	CalderaMailChimpSurveyForm
} from "./index";
import {mailChimpTestForm} from "./mailChimpTestForm.fixture";
import {
	surveyQuestion1,
	surveryQuestion2,
	surveyEmailField,
	surveyQuestion1Id,
	surveyQuestionFields,
	surveyQuestionId2
} from "./surveyFields.fixture";

storiesOf('MailChimp Form Components', module)

	.add('Mailchimp Signup form', () => (
		<MailChimpForm
			form={mailChimpTestForm}
			onSubmit={(values) => alert(JSON.stringify(values))}
		/>
	))
	.add('Mailchimp Survey Form', () => (
		<MailChimpSurveyForm
			listId={'a111'}
			onChange={() => {
			}}
			onBlur={() => {
			}}
			questions={surveyQuestionFields}
			emailField={surveyEmailField}
			initialQuestionId={surveyQuestion1Id}
		/>
	));


[
	{
		story: 'Caldera Survey',
		listId: 'f402a6993d',
		apiRoot: 'https://calderawp.lndo.site/wp-json/caldera-api/v1/messages/mailchimp/v1'
	},
	{
		story: 'JavaScript Survey',
		listId: '45907f0c59',
		apiRoot: 'https://calderawp.lndo.site/wp-json/caldera-api/v1/messages/mailchimp/v1'
	},
].map( survey => {

	console.log(apiRoot);
	const {listId,apiRoot,story} = survey;

	const TheForm = ({listId,apiRoot}) => {

		/**
		 * Track token
		 */
		const [token,setToken] = useState('');

		/**
		 * Get token via remote API
		 */
		useEffect( () => {
			if( ! token ){
				fetch(`${apiRoot}/token`, {
					method: 'POST'
				})
					.then(r => r.json())
					.then(r => {
						setToken(r.token);
					})
					.catch(e => console.log(e));
			}
		},[token,setToken]);
		if( token ){
			return (
				<CalderaMailChimpSurveyForm
					token={token}
					listId={listId}
					apiRoot={apiRoot}
					onSubmit={(values) => alert(JSON.stringify(values))}
				/>
			)
		}
		return <div>Loading token</div>
	}
	storiesOf('MailChimp Survey Forms', module)

		.add(story, () => (
			<TheForm listId={listId} apiRoot={apiRoot} />
		))



});


