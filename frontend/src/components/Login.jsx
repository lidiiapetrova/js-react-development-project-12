import React from 'react';
import { useFormik } from 'formik';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });
    return (
    <div className='row justify-content-center align-content-center h-100'>
        <div className='col-12 col-md-8 col-xxl-6'>
            <div className='card shadow-sm'>
                <div className='card-body p-5'>
                <form onSubmit={formik.handleSubmit}>
                    <h1 className='text-center mb-4'>Войти</h1>
                    <div className='form-floating mb-3'>
                        
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            className='form-control'
                        />
                        <label htmlFor="name" className='form-label'>Ваш ник</label>
                    </div>
                    <div className='form-floating mb-3'>
                        
                        <input
                            id="password"
                            name="password"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            className='form-control'
                        />
                        <label htmlFor="password" className='form-label'>Пароль</label>
                    </div>
                    <button className='w-100 mb-3 btn btn-outline-primary' type="submit">Войти</button>
                </form>
            </div>
        </div>
        </div>
    </div>
    );
}

export default Login;