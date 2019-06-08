import { FieldWrapper } from "../../components/fields/FieldWrapper/FieldWrapper";
import { Message } from "../../components/Messages/Message";
import React, { Fragment } from "react";
import classNames from "classnames";
import { fieldFactory } from "./fieldFactory";

export const fieldAreaFactory = (
	field,
	onChange,
	onBlur,
	fieldErrors,
	fieldsTouch
) => {
	const { fieldType, fieldId, required } = field;
	const hasError = fieldErrors && "string" === typeof fieldErrors[fieldId];
	const error = hasError && fieldErrors[fieldId];
	const touched = fieldsTouch && fieldsTouch[fieldId];
	let wrapperClassNames = [
		"caldera-field-group",
		`caldera-field-area-${fieldType}`,
	];

	const showErrors = touched && hasError;
	if (showErrors) {
		wrapperClassNames.push("has-error");
	}

	if (required) {
		wrapperClassNames.push("is-required");
	}

	const MessageZone = () => (
		<Fragment>
			{showErrors && (
				<Message
					message={{
						error: true,
						message: error,
					}}
				/>
			)}
		</Fragment>
	);

	return (
		<Fragment>
			{fieldFactory(
				field,
				onChange,
				onBlur,
				wrapperClassNames,
				MessageZone
			)}
		</Fragment>
	);
};
