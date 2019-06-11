import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { Form } from 'react-bootstrap';

export const FieldWrapperOuter = ({ fieldId, wrapperClassNames, children }) => (
	<Form.Group controlId={fieldId} className={classNames(wrapperClassNames)}>
		{children}
	</Form.Group>
);

export const FieldWrapper = props => {
	const {
		fieldId,
		description,
		wrapperClassNames,
		children,
		label,
		required,
		hideLabel,
		MessageZone,
	} = props;
	return (
		<FieldWrapperOuter
			fieldId={fieldId}
			wrapperClassNames={wrapperClassNames}
		>
			<Form.Label srOnly={hideLabel}>
				{label} {required && <span>*</span>}
			</Form.Label>
			{children}
			{description && (
				<Form.Text className="text-muted">{description}</Form.Text>
			)}
			{!!MessageZone && <MessageZone />}
		</FieldWrapperOuter>
	);
};

FieldWrapper.propTypes = {
	fieldType: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	attributes: PropTypes.object,
	className: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.string),
		PropTypes.string,
	]),
};
