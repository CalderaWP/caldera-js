import React,{useState,useMemo,useEffect,Fragment} from 'react';
import {Panel, PanelBody, PanelRow} from '@wordpress/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {FormListItem} from '../FormListItem/FormListItem';
import {fieldAreaFactory,fieldFactory} from "@calderajs/components";
import moment from 'moment';
const fuzzysearch = function(needle, haystack) {
    if( ! haystack.length || ! needle.length ){
        return [];
    }
    const results = [];
    haystack.forEach(item  => {
        if( needle === item || item.includes(needle) ){
            results.push(item);
        }
    });
    return  results;
};

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
    const [searchBy,setSearchBy] = useState('');
    const [sortedForms,setSortedForms] = useState(forms);
    const [sortBy,setSortBy] = useState('name');
    const [sortOrder,setSortOrder] = useState('DESC');



    const getFormKey = (form,key,defaultValue) => form.hasOwnProperty(key) ? form[key] : defaultValue;

    useEffect( () => {
       doSort()
    },[sortBy,forms,sortOrder,searchBy]);


    const getFormNames = () => {
        let names = [];
        forms.forEach(form => {names.push(form.name)});
        return names;
    };

    const doSort = () => {
        let sorted = forms;
        let _forms = forms;
        if( searchBy && 2 < searchBy.length ){
            const foundFormNames = fuzzysearch( searchBy, getFormNames() );
            if( ! foundFormNames.length ){
                setSortedForms([]);
                return;
            }else{
                _forms = forms.filter( form => foundFormNames.includes(form.name) );
            }
        }

        switch (sortBy) {
            case '_last_updated':
                sorted = _forms.sort((form,lastForm) => {
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
                sorted = _forms.sort((form,lastForm) => {
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

    const searchField = {
        fieldType: 'text',
        label: 'Search Forms By',
        value: searchBy,

    };



    const FormSearch = () => {
        return (
            <Fragment>
                {fieldAreaFactory(searchField, setSearchBy )}
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
