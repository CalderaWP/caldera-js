const defaults = {
    firstName:'',
    email:'',
    firstNameLabel: 'First Name',
    emailLabel: 'Email'
};

export const  creatContactFormConfig = ({firstName, firstNameLabel, email, emailLabel,config}) => {
    const textField = {
        fieldType: 'text',
        value: firstName ? firstName : defaults.firstName,
        label: firstNameLabel ? firstNameLabel : defaults.firstNameLabel,
        fieldId: 'textFieldId',
        required: true,
    };
    const emailField = {
        fieldType: 'email',
        value: email ? email : defaults.email,
        label: emailLabel ? emailLabel : defaults.emailLabel,
        fieldId: 'emailFieldId',
        required: true,
    };

    const submitButton = {
        fieldId: 'sendSubmit',
        fieldType: 'submit',
        label: 'Send'
    };


    const form = {
        ...config,
        rows: [
            {
                rowId: 'row1',
                columns: [
                    {
                        fields: [emailField.fieldId],
                        width: '1/2',
                        columnId: 'row1col1'
                    },
                    {
                        fields: [textField.fieldId],
                        width: '1/2',
                        columnId: 'row1col2'
                    },
                ],

            },
            {
                rowId: 'row2',
                columns: [
                    {
                        fields: [submitButton.fieldId],
                        width: '12',
                        columnId: 'row2col1'
                    },

                ]
            }

        ],
        fields: [
            textField,
            emailField,
            submitButton
        ],
        conditionals: []
    };
    return form;
};
