
/**
 * Just a noop for spoofing a default Function
 * @return {Function}
 */
const noop = () => {};

/**
 * isEmailValid is the main function of this module, it validates an email with
 * a simple regex
 *
 * @param  {String}    email  Email that should be validated
 * @param  {Function}  [cb]   Optional callback method
 * @return {Boolean}          Is the email valid?
 */
export const isEmailValid = (email, cb = noop) => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    if (isValid) cb(true);
    return isValid;
}

/**
 * isEmailValidPromise is an indirect alias for isEmailValid, except that this
 * function returns a promise function
 *
 * @param  {String}  email Email that should be validated
 * @return {Promise}       Is the email valid?
 */
export const isEmailValidPromise = email => Promise.resolve(isEmailValid(email));

/**
 * isEmail is an alias for isEmailValid
 *
 * @type {Boolean}
 */
export const isEmail = isEmailValid;

/**
 * isEmailPromise is an alias for isEmailValidPromise
 *
 * @type {Promise}
 */
export const isEmailPromise = isEmailValidPromise;
