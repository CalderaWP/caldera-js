import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField,
} from './fields.fixtures';
import React from 'react';

export const formRowOne = {
	rowId: 'r1',
	columns: [
		{
			fields: [emailField],
			width: '1/2',
			columnId: '1a',
		},
		{
			fields: [textField],
			width: '1/4',
			columnId: '1b',
		},
	],
};

export const formRowTwo = {
	rowId: 'r2',
	columns: [
		{
			fields: [checkboxField, selectField],
			width: '1/2',
			columnId: 1,
		},
		{
			fields: [radioField],
			width: '1/4',
			columnId: 2,
		},
	],
};

export const formRows = [formRowOne, formRowTwo];

export const notFormRow = {
	rowId: 'notForm',
	columns: [
		{
			children: <div>Half Column</div>,
			width: '1/2',
			columnId: 1,
		},
		{
			children: <div>Quarter Column</div>,
			width: '1/4',
			columnId: 2,
		},
		{
			children: <div>Quarter Column 2</div>,
			width: '1/4',
			columnId: 3,
		},
	],
};

export const notFormRows = [notFormRow];
