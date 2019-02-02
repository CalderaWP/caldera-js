import {Fragment,setState} from "react";

const Page = (props) => {
	const [message,setMessage] = setState(props.message);

	return (
		<Fragment>
			<label htmlFor={'set-message'}>
				Change Message
			</label>
			<input value={message} onChange={setMessage} id={'set-message'} />
			<div>{message}</div>
		</Fragment>

	)
};

Page.getInitialProps = async () => {
	return {msg: 'HELLO!'};
};

export default Page;
