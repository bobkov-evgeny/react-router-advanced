export interface FormValues {
    [key: string]: string;
}

export interface IFormComponentProps {
    onSubmit: (formValues: FormValues) => void;
}