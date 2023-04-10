import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Logo from '../../assets/imgs/Applogicalogo.png';

import styles from './LoginForm.module.css'
import { green } from '@mui/material/colors';

const LoginForm = () => {

const [company, setCompany] = useState({
    email: "",
    password: ""
});
const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword((show) => !show);
const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

const handleChange = (e) => {
    setCompany({
        ...company,
    [e.target.name]: e.target.value
    })
}

console.log(company);

  return (
    <div className={styles.login}>
      <img src={Logo} alt="logo" />
      
    <Box
      component="form"
      className={styles['login-form']}
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      autoComplete="off"
    >
      <h2 className={styles.title}>Login</h2>
      <TextField
        id="outlined-controlled"
        label="Email"
        name= "email"
        fullWidth
        onChange={handleChange}
      />
        <FormControl sx={{ m: 1, }} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            name='password'
            onChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained" fullWidth color='primary'>Sign in</Button>
    </Box>
    </div>
  )
}

export default LoginForm