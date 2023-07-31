import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import './style.css';
import { useNavigate } from 'react-router-dom';
import signUpSchema from './Schemas/signUpSchema';
import { useFormik } from 'formik';
import UserService from './Api'
import Swal from 'sweetalert2';
const Form = () => {

    const [role, setRole] = useState("user");
    const onOptionChange = (e) => {
        setRole(e.target.value);
    };
    const initialState = {
  
        username: "",
        email: "",
        password: "",
        mobile: "",
       
    }

    const { values, errors, handleChange, handleBlur, handleSubmit, touched } = useFormik({
        initialValues: initialState,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
            eventRegister();
            action.resetForm();
        },
    })
    console.log(values, " ", role);
    const eventRegister = async () => {
      values.role = role;
      try {
        const response = await UserService.saveUser(values);
        console.log(response);
        const target = "Error";
        const target1 = "Email Already Exists !!";
  
        if (response.data === target) {
          throw target;
        } else if (response.data === target1) {
          throw target1;
        } else {
          let timerInterval;
          Swal.fire({
            title: "Registered Successfully !!",
            html: "Redirecting in <b></b> milliseconds.",
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector("b");
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log("I was closed by the timer");
            }
          });
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error}`,
        });
        console.log(error);
      }
    };

    const navigate = useNavigate();
    return (
        <div className='whole'>
            <div>
                
                {/* <div>
                    <img src='images/CLERA.png' className="logo" alt="a-logo" width="10%"></img>
                </div> */}
                
                <div className="kl" style={{width: "300px",
  margin: "150px 10px 15px 600px",
  padding:"10px",
  border: "1px solid #ccc",
  radius: "4px" }}>
                    <form className="registration-form" onSubmit={handleSubmit}>
                        <h2>Signup</h2>
                        

                        <TextField
                            label="UserName"
                            name='username'
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        {errors.username && touched.username ? <p>{errors.username}</p> : null}
                        <br />
                        <TextField
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        {errors.email && touched.email ? <p>{errors.email}</p> : null}
                        <br />
                        
                        <TextField 
                            label="Password"
                            name='password'
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            style={{marginRight:'0px'}}
                            // onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {errors.password && touched.password ? <p>{errors.password}</p> : null}
                        <br />
                        
                
                        

                        <br />
                        <TextField
                            label="Mobile"
                            name='mobile'
                            value={values.mobile}
                            type="tel"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // onChange={(e) => setMobile(e.target.value)}
                            required
                        />
                        {errors.mobile && touched.mobile ? <p>{errors.mobile}</p> : null}
                        <br />
                       
                        <Button
                            type='submit'
                            style={{ marginLeft: "7px", borderRadius: "15px", color: "WHITE" }}
                            key="services"
                            color='primary'
                            variant='contained'
                            // onClick={() => navigate('/login')}

                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            REGISTER
                        </Button>

                    </form>

                </div >

            </div >
        </div>
    );
};

export default Form;