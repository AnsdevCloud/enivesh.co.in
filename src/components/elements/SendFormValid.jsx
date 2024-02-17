import { object, string, number, date, InferType } from 'yup';

export const FormValid = object({

    number: number()
        .typeError('Must be a number')
        .min(0, 'Number must be greater than or equal to 0')
        .required('Number is required'),
    pincode: string()
        .matches(/^\d{6}$/, 'Invalid PIN code. It should be 6 digits.')
        .required('PIN code is required'),
    email: string()
        .email('Invalid email address')
        .required('Email is required'),
    city: string().min(2, "Min 2 to charactor").required('City is required'),
    dateOfBirth: date()
        .required('Date of birth is required')
        .test('is-over-18', 'You must be at least 18 years old', function (value) {
            // Calculate the minimum date for 18 years ago from today
            const minDate = new Date();
            minDate.setFullYear(minDate.getFullYear() - 18);

            // Compare the input date with the minimum date
            return new Date(value) <= minDate;
        }),
    occupation: string().required('Occupation is required'),
    income: string().required('Income is required'),
    gender: string().required('Gender is required'),
    createdOn: date().default(() => new Date())
});