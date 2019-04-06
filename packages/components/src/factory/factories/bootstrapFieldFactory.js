import {
	FieldSet,
	RichText,
	MagicRichText,
	isValidHtml5type,
	AutoCompleteField,
	FormFieldsAutoComplete
} from '@calderajs/components';
import React from 'react';
import {SubmitButton} from "../..";
import {parseAttributes} from "../../components/fields/util";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Form from 'react-bootstrap/Form'

const ToggleField = ({options, value, onChange, fieldId, label, description}) => {

	return (
		<Form.Group controlId={fieldId}>
			<Form.Label>{label}</Form.Label>
			<ToggleButtonGroup
				type="checkbox"
				value={value}
				onChange={{options, value, onChange}}
				id={id}
			>
				{options.map(option => (
					<ToggleButton key={option.value} value={option.value}>{option.label}</ToggleButton>))}
			</ToggleButtonGroup>
			{description &&
			<Form.Text className="description" id={`${fieldId}-description`}>
				{description}
			</Form.Text>
			}

		</Form.Group>

	);
}
/**
 * Create a field from an object describing it.
 *
 * Note: field.render is a render prop. If it is passed, field is passed to it.
 *
 * @param field
 * @param onChange
 * @param onBlur
 * @return {*}
 */
export const bootstrapFieldFactory = (field, onChange, onBlur) => {

	const {
		fieldType,
		label,
		attributes,
		options,
		fieldId,
		messages,
		render,
		placeholder,
		description,
		value
	} = field;

	let controlProps = {
		type: fieldType,
		placeholder,
		value,
		onChange,
		onBlur,
		attributes: parseAttributes(attributes)
	};

	if (description) {
		controlProps['aria-describedby'] = `${fieldId}-description`
	}

	if (render) {
		return React.createElement(render, field);
	}

	switch (fieldType) {
		case 'checkboxes':
			return (
				<FieldSet
					fieldType={fieldType}
					legend={label}
					attributes={attributes}
				>
					{options.map(option => {
						const {
							value,
							label,
							description,
							attributes
						} = option;
						const optionId = option.hasOwnProperty('id')
							? option.id
							: `opt-${fieldId}-${option.value}`;
						return (
							<Form.Group controlId={optionId}>
								<Form.Check
									type="checkbox"
									label={label}
									value={value}
								/>
							</Form.Group>
						);
					})}
				</FieldSet>
			);
		case 'textarea':
			return (
				<Form.Group controlId={fieldId}>
					<Form.Label>Example select</Form.Label>
					<Form.Control as="textarea" {..._attributes} />
				</Form.Group>
			);
		case 'toggle':
			return <ToggleField {...field} onChange={onChange}/>;
		case 'radio':
			return (
				<Form.Group controlId={fieldId}>
					<Form.Label>{label}</Form.Label>
					<Form.Check
						type={'radio'}
						id={`default-${type}`}
						label={`default ${type}`}
					/>
				</Form.Group>

			)
		case 'select':
		case 'dropdown':
			return (
				<Form.Group controlId={fieldId}>
					<Form.Label>{label}</Form.Label>
					<Form.Control as="select" {...controlProps}>
						{field.options.map(option => (
							<option
								key={option.value}
								value={option.value}
							>
								{option.label}
							</option>)
						)}
					</Form.Control>
				</Form.Group>

			)
		case 'submit':
			delete field.value;
			delete field.onBlur;
			delete field.onChange;
			controlProps = {
				...controlProps,
				value: label
			}

			return (
				<Form.Group controlId={fieldId}>
					<Form.Control
						{...controlProps}
					/>
					{description &&
					<Form.Text className="description" id={`${fieldId}-description`}>
						{description}
					</Form.Text>
					}

				</Form.Group>
			);
		case 'text':
		case 'email':
		case 'number':
		case 'input':
		default:
			if (isValidHtml5type(fieldType)) {
				if (field.html5type !== fieldType) {
					field = {...field, html5type: fieldType};
				}
			} else {
				field.html5type = 'text';
			}


			return (
				<Form.Group controlId={fieldId}>
					<Form.Label>{label}</Form.Label>
					<Form.Control
						{...controlProps}
					/>
					{description &&
					<Form.Text className="description" id={`${fieldId}-description`}>
						{description}
					</Form.Text>
					}

				</Form.Group>
			);


	}
};
