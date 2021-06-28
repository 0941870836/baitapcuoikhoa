import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userService } from '../../Services';
import { signupUserSchema } from '../../Services/user';

class SignupScreen extends Component {
    _handleSubmit = values => {
        userService.signUp(values)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    };
    render() {
        return (
            <div className="w-50 mx-auto">
                <h1 className="display-4 text-center">Sign Up</h1>
                <Formik
                    initialValues={{
                        taiKhoan: '',
                        matKhau: '',
                        hoTen: '',
                        email: '',
                        soDT: '',
                        maNhom: 'GP01',
                    }}
                    validationSchema={signupUserSchema}
                    onSubmit={this._handleSubmit}
                    render={(formikProps) => (
                        <Form>
                            <div className="form-group">
                                <label>Tài khoản: </label>
                                <Field type="text" className="form-control" name="taiKhoan" onChange={formikProps.handleChange} />
                                <ErrorMessage name="taiKhoan" />
                            </div>
                            <div className="form-group">
                                <label>Mật khẩu: </label>
                                <Field type="password" className="form-control" name="matKhau" onChange={formikProps.handleChange} />
                                <ErrorMessage name="matKhau" />
                            </div>
                            <div className="form-group">
                                <label>Họ tên: </label>
                                <Field type="text" className="form-control" name="hoTen" onChange={formikProps.handleChange} />
                                <ErrorMessage name="hoTen" />
                            </div>
                            <div className="form-group">
                                <label>Email: </label>
                                <Field type="email" className="form-control" name="email" onChange={formikProps.handleChange} />
                                <ErrorMessage name="email" />
                            </div>
                            <div className="form-group">
                                <label>Số điện thoại: </label>
                                <Field type="text" className="form-control" name="soDT" onChange={formikProps.handleChange} />
                                <ErrorMessage name="soDT">
                                    {
                                        (msg) => <div className="alert alert-danger">{msg}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="form-group" style={{ marginBottom: 10 }}>
                                <label>Mã nhóm: </label>
                                <Field component="select" className="form-control" name="maNhom" onChange={formikProps.handleChange}>
                                    <option>GP 01</option>
                                    <option>GP 02</option>
                                    <option>GP 03</option>
                                    <option>GP 04</option>
                                    <option>GP 05</option>
                                    <option>GP 06</option>
                                    <option>GP 07</option>
                                    <option>GP 08</option>
                                    <option>GP 09</option>
                                    <option>GP 10</option>
                                </Field>
                                <ErrorMessage name="maNhom" />
                            </div>
                            <div className="text-center">
                                <button className="btn btn-success">Submit</button>
                            </div>
                        </Form>
                    )} />

            </div >
        );
    }
}

export default SignupScreen;