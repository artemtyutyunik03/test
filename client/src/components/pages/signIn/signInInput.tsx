import React from 'react';
import {Controller, useForm, useFormState} from "react-hook-form";
import {loginValidation, passwordValidation} from "../../../Validation";
import {Box, Button, Grid, Link, TextField} from "@mui/material";
import {Link as RouterLink} from 'react-router-dom';
import {IInputsProps, ISignInForm} from "../../../interfaces/interfaces";


function SignInInput({onSubmit}: IInputsProps) {
    const {handleSubmit, control} = useForm<ISignInForm>();
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
                //disabled={!isValid}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign In
            </Button>
            <Grid container>
                <Grid item>
                    <Link variant="body2" component = {RouterLink} to = 'sign-up'>
                            {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SignInInput;