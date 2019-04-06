import React, {useState} from 'react';
import {Message} from "@calderajs/components";
import './App.css';
import {
	CF2Form
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
		</div>
	);

}

export default App;
