import React, {useState} from 'react';
import {Message} from "@calderajs/components";
import './App.css';
import {
	CF2Form
} from "@calderajs/forms";
import axios from 'axios';


const App = ({apiRootUri, formId, formConfig}) => {

	const [formLoaded, setFormLoaded] = useState(false);
	const [message, updateMessage] = useState('Effect has not run yet');
	const [form, setForm] = useState(formConfig);

	return (
		<div className="App">
			<header className="App-header">
				<Message
					message={{message}}
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
		</div>
	);

}

export default App;
