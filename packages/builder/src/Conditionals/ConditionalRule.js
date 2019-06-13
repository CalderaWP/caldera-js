import React, { useState, useEffect, Fragment } from 'react';
import useHover from 'react-use';
import { MagicField } from '../MagicField/MagicField';
import { SelectField, ButtonField, Row, Column } from '@calderajs/components';
import { ConditionalLine } from './ConditionalLine';

export const ConditionalRule = ({
	group,
	onChange,
	fields,
	magics,
	isLast,
	addLine,
	removeLine,
	groupId,
}) => {
	
	let isFirst = true;
	return (
		<div className={`caldera-condition-group caldera-condition-lines`}>
			{Object.keys(group).map((lineId,lineIndex) => {
				const changeHandler = update => {
					onChange({
						...group,
						[lineId]: update,
					});
				};
				
				const onRemoveLine = () => removeLine(groupId, lineId);
				return (
					<Fragment key={lineId}>
						<ConditionalLine
							addLine={addLine}
							removeLine={onRemoveLine}
							line={group[lineId]}
							id={lineId}
							onChange={changeHandler}
							fields={fields}
							magics={magics}
							isFirst={isFirst}
						/>

						{lineIndex === Object.keys(group).length - 1 && (
							<Row>
								<Column
									width={1}
									columnId={`condition-point-${lineId}-add-line`}
								>
									<ButtonField onClick={addLine}>
										+
									</ButtonField>
								</Column>
							</Row>
						)}
					</Fragment>
				);
				isFirst = false;
			})}
		</div>
	);
};
