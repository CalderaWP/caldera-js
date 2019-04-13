import classnames from 'classnames';
import React from 'react';
import {isEmpty} from 'lodash'
import BaseControl from "./BaseControl";
function RadioControl({label, className, selected, help, instanceId, onChange, options = []}) {
	const id = instanceId;
	const onChangeValue = (event) => onChange(event.target.value);

	return !isEmpty(options) && (
		<BaseControl label={label} id={id} help={help} className={classnames(className, 'components-radio-control')}>
			{options.map((option, index) =>
				<div
					key={`${ id }-${ index }`}
					className="components-radio-control__option"
				>
					<input
						id={`${ id }-${ index }`}
						className="components-radio-control__input"
						type="radio"
						name={id}
						value={option.value}
						onChange={onChangeValue}
						checked={option.value === selected}
						aria-describedby={!!help ? `${ id }__help` : undefined}
					/>
					<label htmlFor={`${ id }-${ index }`}>
						{option.label}
					</label>
				</div>
			)}
		</BaseControl>
	);
}

export default RadioControl;
