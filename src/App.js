// src/App.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './index.css';

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Username should be an email')
        .required('Field required'),
      password: Yup.string()
        .required('Field required'),
    }),
    onSubmit: (values) => {
      alert('Login Successful');
    },
  });

  return (
    <div className="wrapper">
      <div className="container">
        <div className="App">
          <h1>Login</h1> 
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="emailField">Email</label>
              <input
                id="emailField"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div id="emailError">{formik.errors.email}</div>
              ) : null}
            </div>
            
            <div className="form-group">
              <label htmlFor="pswField">Password</label>
              <input
                id="pswField"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div id="pswError">{formik.errors.password}</div>
              ) : null}
            </div>
            
            <div className="form-group">
              <button id="submitBtn" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Felipe Ignacio Sobarzo Bello. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
