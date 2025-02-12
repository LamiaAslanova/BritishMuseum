import React, { useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from 'react-redux'
import controller from "../../../Services/api/requests";
import { endpoints } from "../../../Services/api/constants";
import loginValidation from "../../../Validations/login.validation";
import { signIn } from "../../../Services/redux/Slices/userSlice"
import MainContext from "../../../context/context";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Cookies from 'js-cookie'
import './SignInPage.css'
import { Helmet } from "react-helmet";

const SignInPage = () => {
  const navigate = useNavigate('');
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { showPassword, handleClickShowPassword, } = useContext(MainContext);

  useEffect(() => {
    if (user.id) {
      navigate('/')
    }
  }, [navigate, user])

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",

    },
    validationSchema: loginValidation,
    onSubmit: async ({ email, password }, actions) => {
      const response = await controller.post('/login', { email: email, password: password })
      if (response.auth) {
        actions.resetForm();
        dispatch(signIn(response.user))
        const token = response.token
        Cookies.set('token', token, { expires: 1 })
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: response.message,
          showConfirmButton: false,
          timer: 1000
        }).then(() => {
          navigate('/');
        });

      }
      else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: response.message,
          showConfirmButton: false,
          timer: 1000
        })
      }
    },
  });

  return (
    <div className="signInPage">
      <Helmet>
        <title>Sign in | British Museum</title>
      </Helmet>
      <div className="custom-container signInPage__title__cont">
        <div className="row signInPage__title__row">
          <div className="col-6 signInPage__title__col">
            <img src="https://emails.britishmuseum.org/files/cmi_dev/project_3562/logos/logo_black.png" alt="" />
            <h4>Please enter your details to sign in to your account.</h4>
            <span>* denotes required fields</span>
          </div>
        </div>
      </div>
      <div className="custom-container signInPage__cont">
        <div className="row signInPage__row">
          <div className="col-6 signInPage__col">
            <form
              onSubmit={formik.handleSubmit}>


              <TextField
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
                label="Email"
                type="email"
                variant="filled"
                required
              />
              {formik.touched.email && formik.errors.email && (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              )}
              <TextField
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="filled"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {formik.touched.password && formik.errors.password && (
                <span style={{ color: "red" }}>{formik.errors.password}</span>
              )}

              <div className="signIn__end">
                <Link to={"/sign-up"}>Don't you have an account?</Link>
                <Button className="signIn__submit" type="submit" variant="contained" color="primary">Sign In</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;