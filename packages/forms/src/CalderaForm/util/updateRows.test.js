import {updateRows} from './updateRows';
import {ConditionalState} from '../state/ConditionalState';
import {textField} from "../fields.fixtures";
import React from "react";
import {checkboxField} from "../columns.fixtures";

describe('updateRows', () => {

	const rows = [
		{
			rowId: 'r1',
			columns :[
				{
					columnId: 'c1',
					fields : [
						{
							fieldId: 'hideField'
						},
						{
							fieldId: 'showField'
						}
					]
				}
			]
		}
	];
	it('should remove a hidden row', () => {
		const state = new ConditionalState( {
			hideField: 'h',
			showField: 's'
		},['hideField']);
		expect( updateRows(state,rows)[0].columns[0].fields.findIndex(f => f.fieldId === 'showField')).toEqual(0);
		expect( updateRows(state,rows)[0].columns[0].fields.findIndex(f => f.fieldId === 'hideField')).toEqual(-1);
	});

	it( 'should replace field ids with fields', () => {
		const field = {
			fieldType: 'input',
			html5Type: 'number',
			fieldId: 'showField',
		};

		const state = new ConditionalState( {
			hideField: 'h',
			showField: 's'
		});

		const rows = [
			{
				rowId: 'r1',
				columns :[
					{
						columnId: 'c1',
						fields : [
							{
								fieldId: 'hideField'
							},
							'showField'

						]
					}
				]
			}
		];
		expect( updateRows(state,rows,[field])[0].columns[0].fields.find(f => f.fieldId === 'showField')).toEqual(field);
	});


	it( 'should remove invalid fields', () => {
		const field = {
			fieldType: 'input',
			html5Type: 'number',
			fieldId: 'showField',
		};

		const state = new ConditionalState( {
			hideField: 'h',
			showField: 's'
		});

		const rows = [
			{
				rowId: 'r1',
				columns :[
					{
						columnId: 'c1',
						fields : [
							{
								fieldId: 'hideField'
							},
							'a'

						]
					}
				]
			}
		];
		expect( updateRows(state,rows,[field])[0].columns[0].fields.length).toEqual(1);
	});

	it( 'should allow rows to have render', () => {
		const field = {
			fieldType: 'input',
			html5Type: 'number',
			fieldId: 'showField',
		};

		const state = new ConditionalState( {
			hideField: 'h',
			showField: 's'
		});

		const rows = [
			{
				rowId: 'r45',
				render: () =>  <div>1</div>
			}
		];
		expect( typeof updateRows(state,rows,[field])[0].render).toEqual('function');
	});

	it( 'should allow columns to have render', () => {
		const field = {
			fieldType: 'input',
			html5Type: 'number',
			fieldId: 'showField',
		};

		const state = new ConditionalState( {
			hideField: 'h',
			showField: 's'
		});
		const _Field = props => (
			<input id={'test243'} type={'number'} key={808}/>
		);

		const rows = [
			{
				rowId: 'r1',
				columns: [
					{
						render: _Field,
						width: '1/2',
						columnId: '1aaaaa'
					},
					{
						fields: [textField],
						width: '1/4',
						columnId: '1b'
					}
				]
			}
		];
		expect( typeof updateRows(state,rows,[field])[0].columns[0].render).toEqual('function');
	});

	it( 'should allow fields to have render', () => {
		const _Field = props => <input id={'test808'} type={'number'}/>;
		const state = new ConditionalState( {
			hideField: 'h',
			showField: 's'
		});
		const field = {
			...checkboxField,
			render: _Field,
			key: 800000
		};

		const rows = [
			{
				rowId: 'r1',
				columns: [
					{
						fields: [field, checkboxField],
						width: '1/2',
						columnId: '1aaaaa'
					},
					{
						fields: [textField],
						width: '1/4',
						columnId: '1b'
					}
				]
			}
		];
		expect(  typeof  updateRows(state,rows,[field])[0].columns[0].fields[0].render).toEqual('function');

	})
});
