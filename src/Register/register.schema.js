import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
    username: yup.string()
        .min(3)
        .max(68)
        .required(),

    password: yup.string()
        .min(6)
        .max(26)
        .required(),

    email: yup.string()
        .email()
        .required(),

    agreeToTerms: yup.mixed().oneOf([true], 'You must agree to the terms')
});