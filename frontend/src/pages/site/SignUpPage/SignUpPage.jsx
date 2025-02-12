import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import User from "../../../Classes/User";
import userValidation from "../../../Validations/user.validation";
import controller from "../../../Services/api/requests";
import { endpoints } from "../../../Services/api/constants";
import { useDispatch, useSelector } from "react-redux";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MainContext from "../../../context/context";
import './SignUpPage.css'
import { Helmet } from "react-helmet";

const SignUpPage = () => {
  const navigate = useNavigate('');
  const [image, setImage] = useState(null)
  const user = useSelector((state) => state.user)
  const {
    showPassword,
    showConfirmPassword,
    handleClickShowPassword,
    handleClickShowConfirmPassword
  } = useContext(MainContext);

  useEffect(() => {
    if (user.id) {
      navigate('/')
    }
  }, [navigate, user])

  function handleImageChange(event, setFieldValue) {
    const file = event.currentTarget.files[0]
    setImage(file)
    setFieldValue('src', file)
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirm__password: "",
      src: "",
      // role: "",
    },
    validationSchema: userValidation,
    onSubmit: async ({ firstName, lastName, userName, email, password, src }, actions) => {
      const formData = new FormData()
      const newUser = new User(firstName, lastName, userName, email, password, src);
      formData.append('firstName', newUser.firstName)
      formData.append('lastName', newUser.lastName)
      formData.append('userName', newUser.userName)
      formData.append('email', newUser.email)
      formData.append('password', newUser.password)
      formData.append('src', newUser.src)
      formData.append('isBanned', newUser.isBanned)
      formData.append('banCount', newUser.banCount)
      const response = await controller.post(endpoints.users, formData)
      console.log(response)
      if (response.error) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: response.message,
          showConfirmButton: false,
          timer: 1000
        })
      }
      else {
        actions.resetForm();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User signed up successfully!",
          showConfirmButton: false,
          timer: 1000
        }).then(() => {
          navigate('/sign-in');
        });

      }

    },
  });

  useEffect(() => {
    if (formik.values.firstName && formik.values.lastName) {
      formik.setFieldValue('userName', `${formik.values.firstName} ${formik.values.lastName}`);
    }
  }, [formik.values.firstName, formik.values.lastName]);

  return (
    <div className="signUpPage">
      <Helmet>
        <title>Sign up | British Museum</title>
      </Helmet>
      <div className="custom-container signUpPage__title__cont">
        <div className="row signUpPage__title__row">
          <div className="col-6 signUpPage__title__col">
            <img src="https://emails.britishmuseum.org/files/cmi_dev/project_3562/logos/logo_black.png" alt="" />
            <h3>Email preferences</h3>
            <h4>Sign up to receive news, stories and offers from the British Museum</h4>
            <p>Please enter your details to sign up to our emails.</p>
            <span>* denotes required fields</span>
          </div>
        </div>
      </div>
      <div className="custom-container signUpPage__cont">
        <div className="row signUpPage__row">
          <div className="col-6 signUpPage__col">
            <form
              onSubmit={formik.handleSubmit}
            >
              <TextField
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="firstName"
                label="First name"
                type="text"
                variant="filled"
                required
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <span style={{ color: "red" }}>{formik.errors.firstName}</span>
              )}
              <TextField
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="lastName"
                label="Last name"
                type="text"
                variant="filled"
                required
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <span style={{ color: "red" }}>{formik.errors.lastName}</span>
              )}
              {/* <TextField
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="userName"
          label="User name"
          type="text"
          variant="outlined"
          required
        />
        {formik.touched.userName && formik.errors.userName && (
          <span >{formik.errors.userName}</span>
        )} */}
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
              <TextField
                value={formik.values.confirm__password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="confirm__password"
                label="Confirm password"
                type={showConfirmPassword ? "text" : "password"}
                variant="filled"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {formik.touched.confirm__password &&
                formik.errors.confirm__password && (
                  <span style={{ color: "red" }}>
                    {formik.errors.confirm__password}
                  </span>
                )}
              <TextField style={{ backgroundColor: "#f0f0f0" }}
                onChange={(event) => {
                  handleImageChange(event, formik.setFieldValue)
                }}
                onBlur={formik.handleBlur}
                name="src"
                type="file"
                variant="outlined"
                required
              />
              {formik.touched.src && formik.errors.src && (
                <span style={{ color: "red" }}>{formik.errors.src}</span>
              )}
              {/* <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onBlur={formik.handleBlur}
            value={formik.values.role}
            onChange={formik.handleChange}
            label="Role"
            name="role"
          >
            <MenuItem value={"client"}>Client</MenuItem>
          </Select>
        </FormControl> */}
              <div className="signUp__end">
                <Link to={"/sign-in"}>Do you have an account?</Link>
                <Button className="signUp__submit" type="submit" variant="contained" color="primary">Sign Up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;