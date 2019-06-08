import React, { useContext, useState, useEffect } from "react";
import { FormEditor, FormsList } from "../..";
import { MenuContext } from "../MenuContext";
import { FormContext } from "../FormContext";
import { FormEntryViewer } from "../../";
export const Body = ({
	tab,
	forms,
	activeForm,
	setActiveItem,
	setActiveFormId,
	updateForm,
}) => {
	const { name } = tab;

	const [showSingleForm, setShowSingleForm] = useState(false);
	const [entryViewerOpen, setEntryViewerOpen] = useState(false);

	useEffect(() => {
		if ("forms" !== name) {
			setEntryViewerOpen(false);
			setShowSingleForm(false);
		}
	}, [name, setEntryViewerOpen, setShowSingleForm]);
	const onFormAction = (formId, action) => {
		switch (action) {
			case "view-entries":
				setActiveFormId(formId);
				setActiveItem("forms");
				setEntryViewerOpen(true);
				break;
			case "edit":
				setActiveFormId(formId);
				setActiveItem("forms");
				setShowSingleForm(true);
				setEntryViewerOpen(false);
				break;
			default:
				setActiveFormId(formId);
				setActiveItem("forms");
				break;
		}
	};
	let props = {};
	switch (name) {
		case "forms":
			props = {
				updateForm,
				forms,
				panelTitle: "Forms",
				classname: "",
				onFormAction,
				hideTabs: ["editor", "layout"],
				entryViewerOpen,
				setEntryViewerOpen,
			};
			if (showSingleForm) {
				return <FormEditor form={activeForm} {...props} />;
			}
			return <FormsList {...props} />;
		case "settings":
			return <div>Settings</div>;
		default:
			return <div>{name}</div>;
	}
};

export const BodyWithContext = ({ children }) => {
	const { getActiveTab, setActiveItem } = useContext(MenuContext);
	const {
		forms,
		activeFormId,
		setActiveFormId,
		getActiveForm,
		updateForm,
	} = useContext(FormContext);

	forms.forEach(form => {
		["fields", "conditionals", "processors"].forEach(key => {
			if (!form.hasOwnProperty(key)) {
				form[key] = [];
			}
		});
	});

	const props = {
		updateForm,
		forms,
		tab: getActiveTab(),
		activeForm: getActiveForm(),
		setActiveItem,
		setActiveFormId,
	};
	return <Body {...props} />;
};
