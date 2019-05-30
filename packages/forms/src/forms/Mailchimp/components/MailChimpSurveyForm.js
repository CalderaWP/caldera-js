import React, {Fragment, useState, useMemo} from 'react';
import MailChimpForm from './MailChimpForm'
import PropTypes from 'prop-types';
import {CalderaNotice} from '@calderajs/components';
import {updateSubscriber, createSubscriber} from "../http/publicClient";
import {isEmail} from '../../util/isEmailValid'


function MailChimpSurveyForm(
    {
        token,
        submitUrl,
        emailField,
        questions,
        onChange,
        onBlur,
        onSubmit,
        listId,
        defaultEmailAddress
    }
) {

    const formId = `mc-subscribe-${listId}`;
    /**
     * Track if survey is completed
     */
    const [completed, setCompleted] = useState(false);

    /**
     * Store the error/success message from server
     */
    const [message, setMessage] = useState('');

    /**
     * Store the email address
     */
    const [emailAddress, setEmailAddress] = useState(defaultEmailAddress);


    /**
     * Track current question
     */
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);


    const submitButtonId = 'submitQuestion';
    const submitButton = {
        "fieldId": submitButtonId,
        "fieldType": "submit",
        "label": "Subscribe"
    };
    const initialQuestion = questions[currentQuestionIndex];
    const questionRowId = 'r1';

    function createQuestionFieldRow(questionFieldId, questionRowId) {
        return {
            rowId: questionRowId,
            columns: [
                {
                    columnId: `${questionRowId}-c1`,
                    fields: [questionFieldId],
                    width: 1,
                }
            ]
        }
    }


    function createOtherRow(emailFieldId, submitButtonId) {
        return {
            rowId: 'r2',
            columns: [
                {
                    columnId: 'r2-c1',
                    fields: [emailFieldId],
                    width: '1/2',
                },
                {
                    columnId: 'r2-c2',
                    fields: [submitButtonId],
                    width: '1/2',
                }
            ]
        }
    }

    function createForm({formId, currentQuestion, emailField, submitButton, questionRowId, submitUrl}) {
        const processor = {
            type: "mc-subscribe",
            listId: listId,
            emailField: emailField.fieldId,
            mergeFields: [],
            groupFields: [currentQuestion.fieldId],
            submitUrl
        };

        return {
            ID: formId,
            fields: [
                currentQuestion,
                emailField,
                submitButton
            ],
            rows: [
                createQuestionFieldRow(currentQuestion.fieldId, questionRowId),
                createOtherRow(emailField.fieldId, submitButton.fieldId)
            ],
            processors: [processor]
        };
    }

    const initialForm = createForm({
        formId,
        currentQuestion: initialQuestion,
        emailField,
        submitButton,
        questionRowId,
        submitUrl,
    });

    /**
     * Create initial mailChimpTestForm and track its state
     */
    const [form, setForm] = useState(initialForm);

    /**
     * On submission, advance to next question or set as completed.
     */
    const updateForm = () => {
        if (currentQuestionIndex === questions.length - 1) {
            setCompleted(true);
        } else {
            const nextQuestion = questions[currentQuestionIndex + 1];
            setForm(createForm(
                {
                    formId,
                    currentQuestion: nextQuestion,
                    emailField: {
                        fieldId: emailField.fieldId,
                        fieldType: 'hidden',
                        value: emailAddress,
                    },
                    submitButton,
                    questionRowId,
                    submitUrl,
                }
            ));


            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }

    };

    /**
     * Handle submit
     *
     * @param values
     * @return {Promise<any>}
     */
    const submitHandler = (values) => {
        updateEmailField(values);

        function afterSubmit(r, reject, resolve) {
            if ('object' === typeof r.data && r.data.status && 400 === r.data.status) {
                setMessage(r.message);
                reject(new Error(r.hasOwnProperty('message') ? r.message : 'Invalid'));
            } else if (r.hasOwnProperty('success') && !r.success) {
                setMessage(r.message);
                reject(new Error(r.hasOwnProperty('message') ? r.message : 'Invalid'));
            } else {
                setMessage(r.message);
                updateForm();
                resolve(new Response(JSON.stringify({message: r.hasOwnProperty('message') ? r.message : 'Continue'})));
            }
        }

        const emailFieldId = getEmailField();

        if (!values.hasOwnProperty(emailFieldId)
            || (!isEmail(values[emailFieldId]) && isEmail(emailAddress))
        ) {
            values[emailFieldId] = emailAddress
        }


        return new Promise((resolve, reject) => {
            const processor = form.processors[0];
            if (0 === currentQuestionIndex) {
                createSubscriber({
                    ...values,
                    token
                }, processor).then(r => r.json()).then(r => {
                    afterSubmit(r, reject, resolve);
                })
                    .catch(e => {
                        reject(e);
                    });
            } else {
                updateSubscriber({
                    ...values,
                    token
                }, processor).then(r => r.json()).then(r => {
                    afterSubmit(r, reject, resolve);
                })
                    .catch(e => {
                        reject(e);
                    });
            }


        });
    };

    if (completed) {
        return <div>Completed</div>
    }


    function getEmailField() {
        return emailField.fieldId;

    }

    function updateEmailField(values) {
        const emailFieldId = getEmailField();
        if (values.hasOwnProperty(emailFieldId)) {
            setEmailAddress(values[emailFieldId]);
        }
    }

    const handleChanges = (values) => {
        updateEmailField(values);
        onChange(values);
    };

    return (
        <Fragment>
            {message &&
            <CalderaNotice
                message={
                    {
                        message: message,
                        error: true,
                    }
                }
            />
            }
            <MailChimpForm
                form={form}
                onBlur={onBlur}
                onChange={handleChanges}
                onSubmit={submitHandler}
                hideOnSubmit={false}
            />
        </Fragment>

    )
}

const noop = () => {
};
const promiseNoop = new Promise((resolve) => {
    resolve();
});
MailChimpSurveyForm.defaultProps = {

    onChange: noop,
    onBlur: noop,
    onSubmit: () => {
        return new Promise((resolve, reject) => {
            resolve(new Response(JSON.stringify({})));
        });
    },
    emailField: {
        "fieldId": "mc-email",
        "fieldType": "input",
        "html5Type": "email",
        "isRequired": true,
        "label": "Email",
        "default": ""
    },
    onReady: promiseNoop,
    submitUrl: 'https://formcalderas.lndo.site/wp-json/caldera-api/v1/messages/mailchimp/v1/lists/subscribe',
    defaultEmailAddress: '',
};

MailChimpSurveyForm.propTypes = {
    emailField: PropTypes.object.isRequired,
    listId: PropTypes.string.isRequired,
    submitUrl: PropTypes.string,
    questions: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onSubmit: PropTypes.func,
    defaultEmailAddress: PropTypes.string,
    onReady: PropTypes.instanceOf(Promise),
};

export default MailChimpSurveyForm;
