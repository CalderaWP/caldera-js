import React, {useState, useRef, useEffect} from "react";
import {PacmanLoader} from 'react-spinners';
import PropTypes from 'prop-types';
import {createSubscriber} from "../http/publicClient";
import {CalderaForm} from "../../../";

/**
 * Component for stand-alone mailchimp forms served via Caldera API
 *
 * @param form
 * @param onChange
 * @param onBlur
 * @param onSubmit
 * @return {*}
 * @constructor
 */
function MailChimpForm({form, onChange, onBlur, onSubmit, hideOnSubmit, onReady}) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [completed, setIsCompleted] = useState(false);
    const [message, setMessage] = useState('');
    const readyRef = useRef(false);
    useEffect(() => {
        readyRef.current = true;
        Promise.resolve(onReady);
        return () => readyRef.current = false;
    }, [readyRef, onReady]);

    const Spinner = () => (
        <div><PacmanLoader/></div>
    );

    if (!form.hasOwnProperty('fields')) {
        return <Spinner/>
    }

    const {processors} = form;
    const processor = processors.find(p => 'mc-subscribe' === p.type);

    if (completed) {
        return <div className={'success'}>{message}</div>
    }

    if (isSubmitting) {
        return <Spinner/>;
    }

    return (
        <div>
            {message &&
            <div className={'error'}>{message}</div>
            }

            <CalderaForm
                form={form}
                onSubmit={(
                    //current values of all fields
                    values,
                    actions
                ) => {
                    setIsSubmitting(true);
                    onSubmit(values, processor).then(r => r.json()).then(r => {
                        setIsSubmitting(false);

                        if (hideOnSubmit) {
                            setMessage(r.message);
                            setIsCompleted(r);
                        }

                    })
                        .catch(e => {
                            setIsSubmitting(false);
                            if (e.hasOwnProperty('message')) {
                                setMessage(e.message);
                            } else {
                                setMessage('An Error happened.');

                            }
                        });
                }}
                onChange={(values) => {
                    onChange(values) //all field values
                }}
            />
        </div>

    )
}

/**
 * Default Submit handler
 *
 * @param values
 * @return {*}
 */
const onSubmit = (values, processor) => {
    return createSubscriber(values, processor);
};

MailChimpForm.propTypes = {
    listId: PropTypes.string,
    form: PropTypes.object,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onReady: PropTypes.instanceOf(Promise),
};

const noop = () => {
};
const promiseNoop = new Promise((resolve) => {
    resolve();
});

MailChimpForm.defaultProps = {
    onSubmit: noop,
    onChange: noop,
    hideOnSubmit: true,
    onReady: promiseNoop
};
export default MailChimpForm;
