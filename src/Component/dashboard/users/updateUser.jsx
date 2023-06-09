
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';



export default function UpdateUser() {
let token =localStorage.getItem("userToken");
  let navigate = useNavigate();
  let {userID} = useParams()
  const [userDetails, setUserDetails] = useState({})

  const [state, setState] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
getValues,
setValue,
    reset,
  } = useForm();
  useEffect(() => {
    
  axios.get("http://localhost:5000/api/users/auth/user/"+userID,{ headers: {"authorization" : `Bearer ${token}`} })
  .then(res=>{setUserDetails(res.data.data)
  setValue('name',res.data.data.name)
  setValue('email',res.data.data.email)
  })
  }, [userID])
  
  const onSubmit = (user) => {
  
    axios
      .put("http://localhost:5000/api/users/auth/updateUser/"+userID,user,{ headers: {"authorization" : `Bearer ${token}`} })
      .then(({ data }) => {
        console.log(data);
        if (data.message === "updated success") {
          navigate("/dashboard/users");
        } else {
        
          setState(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(user);
  };

  return (
    userDetails &&
    <div className="contentRegister ">
      <h3 className="text-center pt-4 pb-2 mb-3">Add User</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="container py-3">
        <div className="row">
              
                <div className="col-md-6">
                <Form.Group className="mb-3 mt-1">
                <Form.Label htmlFor="name">name</Form.Label>
                  <input
                    className="form-control"
                    name="name"
                    id="name"
                    defaultValue={userDetails.name}
                    placeholder="Enter name"
                    type="text"
                    {...register("name", {
                      required: { value: true, message: "name is required" },
                    })}
                  />
                  {errors.name && (
                    <p className="error_message text-danger ">
                      {errors.name.message}
                    </p>
                  )}
                </Form.Group>
                </div>
           
<div className="col-md-6">
<Form.Group className="mb-3">
<Form.Label htmlFor="address">Email Address</Form.Label>
<input
                    className="form-control"
                    id="email"
                    type="email"
                    name="email"
                    defaultValue={userDetails.email}
                    placeholder="Enter your Email"
                    {...register("email", {
                      required: { value: true, message: "Email is required" },
                      pattern: {
                        value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Email not valid",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="error_message text-danger ">
                      {errors.email.message}
                    </p>
                  )}
                </Form.Group>
</div>
            
<div className="col-md-6">
<Form.Group className="mb-3 ">
<Form.Label htmlFor="longitude">Password</Form.Label>

<input
                    className="form-control"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    {...register("password", {
         
                      pattern: {
                        value: /^[A-Z][a-z0-9]{3,8}$/,
                        message:
                          " password required must start capital and 3-8 any character from(a-z or 0-9)",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="error_message text-danger ">
                      {errors.password.message}
                    </p>
                  )}
                </Form.Group>
</div>
      <div className="col-md-6">
      <Form.Group className="mb-3 ">
<Form.Label htmlFor="latitude">Confirm Password</Form.Label>
<input
                    className="form-control"
                    id="cpassword"
                    type="password"
                    name="cpassword"
                    placeholder="Enter your CPassword"
                    {...register("cpassword", {
         
                      validate: (value) => {
                        if (value !== getValues("password"))
                          return "CPassword must match Password";
                      },
                    })}
                  />
                  {errors.cpassword && (
                    <p className="error_message text-danger ">
                      {errors.cpassword.message}
                    </p>
                  )}
                </Form.Group>

        </div>    
  
                <div>
                  <Button
                    className="m-auto w-100 text-center btn submit"
                    type="submit"
                  >
                  Update User
                  </Button>
                </div>
            
       
            </div>
          </div>
          </Form>
        </div>
 

  );
}
