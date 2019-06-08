import React, { useState, useMemo, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { fieldAreaFactory } from "@calderajs/components";
import moment from "moment";

const fuzzysearch = function(needle, haystack) {
	if (!haystack.length || !needle.length) {
		return [];
	}
	const results = [];
	haystack.forEach(item => {
		if (needle === item || item.includes(needle)) {
			results.push(item);
		}
	});
	return results;
};

export const FormSearch = ({ forms, onSort }) => {
	const searchDefaults = {
		searchBy: "",
		sortedForms: forms,
		sortBy: "name",
		sortOrder: "DESC",
		formNames: [],
	};
	const [searchBy, setSearchBy] = useState(searchDefaults.searchBy);
	const [sortedForms, setSortedForms] = useState(searchDefaults.sortedForms);
	const [sortBy, setSortBy] = useState(searchDefaults.sortBy);
	const [sortOrder, setSortOrder] = useState(searchDefaults.sortOrder);
	const [formNames, setFormNames] = useState(searchDefaults.formNames);

	const getFormKey = (form, key, defaultValue) =>
		form.hasOwnProperty(key) ? form[key] : defaultValue;

	useEffect(() => {
		const update = doSort();
		onSort([...update]);
	}, [sortBy, forms, sortOrder, searchBy]);

	useEffect(() => {
		let names = [];
		forms.forEach(form => {
			names.push(form.name);
		});
		setFormNames(names);
	}, [forms]);

	const resetSearch = () => {
		setSearchBy(searchDefaults.searchBy);
		setSortOrder(searchDefaults.sortBy);
	};

	const getFormNames = () => {
		return formNames ? formNames : [];
	};

	const doSort = () => {
		let sorted = forms;
		let _forms = forms;
		if (searchBy && 2 < searchBy.length) {
			const foundFormNames = fuzzysearch(searchBy, getFormNames());
			if (!foundFormNames.length) {
				setSortedForms([]);
				return [];
			} else {
				_forms = forms.filter(form =>
					foundFormNames.includes(form.name)
				);
			}
		}

		switch (sortBy) {
			case "_last_updated":
				sorted = _forms.sort((form, lastForm) => {
					const d1 = getFormKey(form, sortBy, null)
						.replace(/[^\+]*$/, "")
						.replace(" +", "");
					const d2 = getFormKey(lastForm, sortBy, null)
						.replace(/[^\+]*$/, "")
						.replace(" +", "");
					const currentMoment = moment(d1);
					const lastMoment = moment(d2);
					if ("ASC" === sortOrder) {
						if (currentMoment.isBefore(lastMoment)) {
							return -1;
						} else {
							return 1;
						}
					}
					if (!currentMoment.isBefore(lastMoment)) {
						return -1;
					} else {
						return 1;
					}
					return !currentMoment.isBefore(lastMoment);
				});
				break;
			case "name":
			default:
				sorted = _forms.sort((form, lastForm) => {
					const current = getFormKey(form, "name", null);
					const last = getFormKey(lastForm, "name", null);
					if ("ASC" === sortOrder) {
						return last.localeCompare(current);
					}
					return current.localeCompare(last);
				});
				break;
		}
		setSortedForms(sorted);
		return sorted;
	};

	const sortField = {
		fieldType: "dropdown",
		label: "Sort Forms By",
		value: sortBy,
		options: [
			{
				value: "name",
				label: "Name",
			},
			{
				value: "_last_updated",
				label: "Updated",
			},
		],
	};
	const orderField = {
		fieldType: "dropdown",
		label: "Order Forms By",
		value: sortOrder,
		options: [
			{
				value: "ASC",
				label:
					"name" === sortBy
						? "Alphabetical"
						: "Most Recently Updated",
			},
			{
				value: "DESC",
				label:
					"name" === sortBy
						? "Reverse Alphabetical"
						: "Least Recently Updated First",
			},
		],
	};

	const searchField = {
		fieldType: "text",
		label: "Search Forms By Name",
		value: searchBy,
	};

	const resetButton = {
		fieldType: "button",
		value: "Reset Search",
		onClick: resetSearch,
	};

	return (
		<Fragment>
			{fieldAreaFactory(resetButton, resetSearch)}
			{fieldAreaFactory(searchField, setSearchBy)}
			{fieldAreaFactory(sortField, setSortBy)}
			{fieldAreaFactory(orderField, setSortOrder)}
		</Fragment>
	);
};

FormSearch.defaultProps = {
	onSort: () => {},
	forms: [],
};

FormSearch.propTypes = {
	onSort: PropTypes.func,
	forms: PropTypes.array,
};
