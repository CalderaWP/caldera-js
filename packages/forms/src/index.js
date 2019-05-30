/**
 * Forms
 */
export { CalderaForm } from './CalderaForm/CalderaForm';
export { CF2Form } from './CF2Form/CF2Form';
export {HorizontalForm} from './HorizontalForm/HorizontalForm';

/**
 * Form helpers
 */
export {ConditionalState} from './CalderaForm/state/ConditionalState';
export {createFieldRule} from './CalderaForm/state/createFieldRule';
export setCf1ClassNames from './CF2Form/setCf1ClassNames';
export {useCf2FormTokens} from './hooks/useCf2FormTokens';

/**
 * Form HTTP helpers
 */
export getCf2Token from './Http/handlers/getCf2Token';
export submitFormCf2 from './Http/handlers/submitFormCf2';
export handleFormSubmitCf2 from './Http/handlers/handleFormSubmitCf2';
export submitFormCaldera from './Http/handlers/submitFormCaldera';
export { formClientFactory } from './Http/clientFactory';
import FormClient from './Http/FormClient';
export {WithStylesheet} from './HOC/WithStylesheet';
export {FormClient};
/**
 * Mailchimp API
 *
 */
import {
    AdminClient,
    getAccounts,
    getAccountsUi,
    getListsUi,
    getLists,
    saveApiKey,
    getForm,
    prepareData,
    createSubscriber,
    updateSubscriber,
} from './forms/Mailchimp'
export const mailChimpApi = {
    AdminClient,
    //Admin API client
    getAccounts,
    getAccountsUi,
    getListsUi,
    getLists,
    saveApiKey,
    //public API client
    getForm,
    prepareData,
    createSubscriber,
    updateSubscriber,
};

/**
 * MailChimp UI
 */
export {
    //Mailchimp components
    MailChimpForm,
    MailChimpSurveyForm,
    CalderaMailChimpForm,
    CalderaMailChimpSurveyForm,
    AddApiKey,
    SelectList,
    //hooks
    useCalderaMailChimpFormConfig,


} from './forms/Mailchimp';
