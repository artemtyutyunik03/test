export interface IInputsProps {
    onSubmit: (data: ISignInForm) => void
}

export interface ISignInForm{
    login: string;
    password: string;
}