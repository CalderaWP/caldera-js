import React, {useState} from 'react';
import {Message} from "@calderajs/components";
import './App.css';
import {
	CF2Form,
	CalderaMailChimpForm,
	CalderaMailChimpSurveyForm
} from "@calderajs/forms";
import axios from 'axios';


const App = ({apiRootUri, formId, formConfig}) => {
	const [form] = useState(formConfig);

	return (
		<div className="App">
			<header className="App-header">
				<Message
					message={{message:'This Is A Message In The Header'}}
					error={false}
				/>
			</header>
			<div>
				<CF2Form
					apiRootUri={apiRootUri}
					formConfig={form}
					axios={axios}
				/>
			</div>
			<div>
				<CalderaMailChimpForm
					apiRoot={'https://calderawp.lndo.site/wp-json/caldera-api/v1/messages/mailchimp/v1'}
					listId={'45907f0c59'}
					onSubmit={(values) => alert(JSON.stringify(values))}
				/>
				<CalderaMailChimpSurveyForm
					apiRoot={'https://calderawp.lndo.site/wp-json/caldera-api/v1/messages/mailchimp/v1'}
					listId={'45907f0c59'}
					onSubmit={(values) => alert(JSON.stringify(values))}
				/>
			</div>
		</div>
	);

}

export default App;
