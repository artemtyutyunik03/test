import React, {FC} from 'react';
import {Controller, useForm, useFormState} from "react-hook-form";
import {loginValidation, passwordValidation} from "../../../Validation";
import {Box, Button, TextField} from "@mui/material";
import {IInputsProps, ISignInForm} from "../../../interfaces/interfaces";


const SignUpInputs: FC<IInputsProps> = ({onSubmit}) => {
    const {handleSubmit, control} = useForm<ISignInForm>({mode: "onChange"});
    const {errors,isValid} = useFormState({control});
    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <Controller
                control={control}
                name={"login"}
                rules={loginValidation}
                render={({ field }) => <TextField
                    onChange={field.onChange}
                    margin="normal"
                    required
                    fullWidth
                    label="Login"
                    name="email"
                    type = "email"
                    autoComplete="email"
                    autoFocus
                    error={ !!errors?.login?.message }
                    helperText={ errors?.login?.message }
                />}
            />
            <Controller
                control={control}
                name={'password'}
                rules = {passwordValidation}
                render={({ field }) => <TextField
                    onChange={field.onChange}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    error={ !!errors?.password?.message }
                    helperText={ errors?.password?.message }
                />}
            />
            <Button
                type="submit"
                fullWidth
                disabled={!isValid}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign Up
            </Button>
        </Box>
    );
}

export default SignUpInputs;