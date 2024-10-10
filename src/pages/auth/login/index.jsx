// import React from "react";
// import { Container, TextField, Button, Typography, Box } from "@mui/material";
// import { AccountCircle, Lock } from "@mui/icons-material";
// import Grid from "@mui/material/Grid2";
// import PersonIcon from "@mui/icons-material/Person";
// import LockIcon from "@mui/icons-material/Lock";
// import "./login.css"
// const LoginPage = () => {
//   return (
//     <Container maxWidth="lg">
//       <Grid >
//         <Grid size={{ lg: 8, md: 3, xs: 12 }} 
//   display="flex" justifyContent="center" alignItems="center" >
//           <div></div>
//           <div >
//             <div className="authinput">
//               <PersonIcon />
//               <input placeholder="Enter Email"/>
//             </div>
//             <div className="authinput">
//               <LockIcon />
//               <input  placeholder="Enter passsword"/>
//             </div>
//           </div>
//         </Grid>
//         <Grid size={{ lg: 4, md: 3, xs: 12 }}></Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import loginimg from "../../../assest/image/loginbkg.png"
import "./login.css"
import { useNavigate } from 'react-router-dom';
import { useLoginApi } from '../../../api/auth';

const LoginPage = () => {
    const navigate = useNavigate();
    const hanldeLogin = useLoginApi();
    const [userDetails,setUserDetails] =useState({
      username:"",password:""
    })
     const handleLogin = async()=>{
      const data = await hanldeLogin.mutateAsync(userDetails)
      // const data = await hanldeLogin.mutateAsync({
      //   "username": "admin",
      //   "password": "Admin@123"
      // })
        navigate('/')
        sessionStorage.setItem("UR",1);
    }

    const handleChange= (e)=>{
      const {value,name} = e?.target;
      setUserDetails({...userDetails,[name]:value})
    }

  return (
    <div className="login-container">
      {/* Left Side - Login Form */}
      <div className="login-form-container">
        <div className="login-box">
          <h1 className="login-title">Login</h1>
          <div className="underline"></div>

          {/* Email Input */}
          <div className="input-group">
            <span className="icon"><PersonIcon/></span> {/* Unicode for user icon */}
            <input type="email" placeholder="Enter username" name='username' onChange={handleChange} value={userDetails?.username} className="input-field" />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <span className="icon"><LockIcon/></span> {/* Unicode for lock icon */}
            <input type="password" placeholder="Enter password" name='password' onChange={handleChange} value={userDetails?.password} className="input-field" />
            <span className="icon-eye"><VisibilityOffIcon/></span> {/* Unicode for eye icon */}
          </div>

          {/* Forgot Password */}
          {/* <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div> */}

          {/* Login Button */}
          <button className="login-btn" onClick={handleLogin}>Login</button>
        </div>
      </div>

      {/* Right Side - Robot Image */}
      <div className="login-image-container">
        {/* <div className="robot-image"></div> */}
        <img className='robot-image' src={loginimg}/>
      </div>
    </div>
  );
};

export default LoginPage;
