import {useState} from 'react';
import {fieldFactory} from "../factory";

export default function useComponentFactory(components) {
	const defaultComponents = {
		input: './InputOne'
	};
	const [componentPaths] = useState(components);
	const createComponent = (field) => {
		const {type,onChange, onBlur} = field
		if( components.hasOwnProperty(type) ){
			return React.lazy(() => import(components[type]));
		}
		fieldFactory(field, onChange, onBlur)

	};



	return [createComponent];
}
