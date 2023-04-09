import React, {ReactElement, useState} from "react";
import Input from "../Input/Input";
import {FormValues, IFormComponentProps} from "../../types/Form.types";
import './SignInForm.styles.css';

const SigninForm: React.FC<IFormComponentProps> = ({onSubmit}): ReactElement => {
    const [formValues, setFormValues] = useState<FormValues>({});

    const handleChange = ({target}: React.FormEvent<HTMLFormElement>): void => {
        const inputEl = (target as HTMLInputElement);

        setFormValues(prev => ({
            ...prev,
            [inputEl.name]: inputEl.value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        onSubmit(formValues);
    };

    return (
        <div className={'sign-in-form-container'}>
            <span className={'form-title'}>
                Sign in
            </span>

            <form
                className={'sign-in-form'}
                onChange={handleChange}
                onSubmit={handleSubmit}
            >
                <Input
                    name={'username'}
                    label={'Username'}
                    placeholder={'Your username'}
                    required
                />

                <button className={'submit-btn'}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SigninForm;