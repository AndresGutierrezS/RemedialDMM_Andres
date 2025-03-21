import React, { useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { saveSession, getSession } from '../authService';

const LoginScreen = ({ navigation }) => {
    useEffect(() => {
        const checkSession = async () => {
            const user = await getSession();
            if (user) navigation.navigate('Home');
        };
        checkSession();
    }, []);

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
                email: Yup.string().email('Correo invalido').required('Requerido'),
                password: Yup.string().min(6, 'Minimo 6 caracteres').required('Requerido'),
            })}
            onSubmit={async (values) => {
                await saveSession(values.email);
                navigation.replace('Home');
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding: 20, width:'auto' }}>
                    <Text>Email:</Text>
                    <TextInput
                        style={{ borderWidth: 1, marginBottom: 10 }}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    {touched.email && errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

                    <Text>Password:</Text>
                    <TextInput
                        style={{ borderWidth: 1, marginBottom: 10 }}
                        secureTextEntry
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                    {touched.password && errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}

                    <Button title="Login" onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    );
};

export default LoginScreen;
