import React, { useState,useEffect } from 'react';
import {Message} from "@calderawp/components";
import './App.css';

const App = () =>  {
    const [message,updateMessage] = useState('Effect has not run yet');

	useEffect(() => {
		updateMessage( 'Effect has run' );
	});

    return (
      <div className="App">
        <header className="App-header">
			<Message
                message={{message}}
                error={false}
            />
        </header>
      </div>
    );

}

export default App;
