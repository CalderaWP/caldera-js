import React from 'react';
import ReactDataGrid from 'react-data-grid';
//import "./styles.css";

export class FormEntryViewer extends React.Component {
	state = { rows: [], columns: [] };

	constructor(props) {
		super(props);
	}

	setColumnsAndRows = () => {
		const { entries, form } = this.props;
		if (!form || !form.fields) {
			return;
		}
		const columns = [];
		const rows = [];
		const defaultColumnProperties = {
			resizable: true,
			width: 120,
		};
		Object.values(form.fields).forEach(field => {
			columns.push({
				...defaultColumnProperties,
				key: field.id,
				name: field.label,
				editable: false,
			});
		});

		function findEntryValue(entry, field) {
			return Object.values(entry.entryValues).find(
				entryValueField => field.key === entryValueField.fieldId
			);
		}

		Object.values(entries).forEach(entry => {
			const entryId = entry.id;
			const row = {
				key: entryId,
			};
			columns.forEach(field => {
				const entryValue = findEntryValue(entry, field);
				if (entryValue) {
					row[field.key] = entryValue.value;
				}
			});
			rows.push(row);
		});

		this.setState({ rows, columns });
	};

	rowCount = () => {
		return this.state.rows.length;
	};

	componentDidMount() {
		this.setColumnsAndRows();
	}

	render() {
		const { form, noItemsMessage } = this.props;
		const { columns } = this.state;
		if (form && form.fields) {
			return (
				<ReactDataGrid
					columns={columns}
					rowGetter={i => this.state.rows[i]}
					rowsCount={this.rowCount()}
					enableCellSelect={true}
				/>
			);
		} else {
			return <div className={'has-error'}>{noItemsMessage}</div>;
		}
	}
}
