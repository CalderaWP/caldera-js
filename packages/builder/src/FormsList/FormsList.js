import React,{useState,useMemo,useEffect,Fragment} from 'react';
import {Panel, PanelBody, PanelRow} from '@wordpress/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {FormListItem} from '../FormListItem/FormListItem';
import {fieldAreaFactory} from "@calderajs/components";
import moment from 'moment';


/**
 *
 * @param forms
 * @param panelTitle
 * @param classname
 * @param onFormAction
 * @return {*}
 * @constructor
 */
export const FormsList = ({forms, panelTitle, classname, onFormAction}) => {
    const [sortedForms,setSortedForms] = useState(forms);
    const [sortBy,setSortBy] = useState('name');
    const [sortOrder,setSortOrder] = useState('DESC');



    const getFormKey = (form,key,defaultValue) => form.hasOwnProperty(key) ? form[key] : defaultValue;

    useEffect( () => {
       doSort()
    },[sortBy,forms,sortOrder]);

    const doSort = () => {
        let sorted = forms;
        setSortedForms([]);
        switch (sortBy) {
            case '_last_updated':
                sorted = forms.sort((form,lastForm) => {
                    const d1 = getFormKey(form,sortBy,null).replace(/[^\+]*$/, '').replace( ' +', '' );
                    const d2 = getFormKey(lastForm,sortBy,null).replace(/[^\+]*$/, '').replace( ' +', '' );
                    const currentMoment = moment(d1);
                    const lastMoment = moment(d2);
                    if ('ASC' === sortOrder) {
                        if( currentMoment.isBefore(lastMoment) ){
                            return -1;
                        }else{
                            return 1;
                        }
                    }
                    if( ! currentMoment.isBefore(lastMoment) ){
                        return -1;
                    }else{
                        return 1;
                    }
                    return  ! currentMoment.isBefore(lastMoment);
                });
                break;
            case 'name':
            default:
                sorted = forms.sort((form,lastForm) => {
                    const current = getFormKey(form, 'name', null);
                    const last = getFormKey(lastForm, 'name', null);
                    if ('ASC' === sortOrder) {
                        return last.localeCompare(current);
                    }
                    return current.localeCompare(last);


                });
        break;
        }
        setSortedForms(sorted);
    };

    const sortField = {
        fieldType: 'dropdown',
        label: 'Sort Forms By',
        value: sortBy,
        options: [
            {
                value: 'name',
                label : 'Name'
            },
            {
                value: '_last_updated',
                label : 'Updated'
            },
        ]
    };
    const orderField = {
        fieldType: 'dropdown',
        label: 'Order Forms By',
        value: sortOrder,
        options: [
            {
                value: 'ASC',
                label : 'name' === sortBy ? 'Alphabetical' : 'Most Recently Updated',
            },
            {
                value: 'DESC',
                label : 'name' === sortBy ? 'Reverse Alphabetical' : 'Least Recently Updated First',
            },
        ]
    };

    const FormSearch = () => {
        return (
            <Fragment>
                {fieldAreaFactory(sortField, setSortBy)}
                {fieldAreaFactory(orderField, setSortOrder)}

            </Fragment>
        )
    };


    return (
        <Panel classname={classNames(classname)}>
            <PanelBody title={panelTitle} icon="feedback" initialOpen={true}>
                <FormSearch />
                {sortedForms.map(form => {
                    return (
                        <PanelRow key={form.id}>
                            <FormListItem
                                key={form.id}
                                form={form}
                                onFormAction={onFormAction}
                            />
                        </PanelRow>
                    );
                })}
            </PanelBody>
        </Panel>
    )
};

/**
 * Prop type definitions for the FormsList component
 *
 * @type {{forms: shim, panelTitle: shim, noFormsMessage: shim, onFormAction: *}}
 */
FormsList.propTypes = {
    forms: PropTypes.array,
    panelTitle: PropTypes.string,
    noFormsMessage: PropTypes.string,
    onFormAction: PropTypes.func.isRequired
};

/**
 * Default props for the forms list component.
 *
 * @type {{forms: Array, panelTitle: string, noFormsMessage: string}}
 */
FormsList.defaultProps = {
    forms: [],
    panelTitle: 'All Forms',
    noFormsMessage: 'No Forms Found'
};
