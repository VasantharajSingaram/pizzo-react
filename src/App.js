import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Routes, Route, Link, BrowserRouter, Navigate, useNavigate } from "react-router-dom";
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar/Navbar';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

const pizzas = []

function App() {
  return (
    <div className="App">
   
    <Routes>

       
        <Route path="/" element={<Home data={pizzas}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </div>
  );
}



function LoginForm (){
  const [page, setPage] = useState(1);
  const handleClick = () => {
    navigate("/signup");
  };
  const [formState, setFormState] = useState("success")
  const navigate = useNavigate();
  const {handleChange, values, handleSubmit} = useFormik({
    initialValues: { username: "vasanth", password: "password@123"},
    onSubmit: async (values) => {
      console.log(values);

    const data = await fetch("http://localhost:4000/signup/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
         body: JSON.stringify(values),
      })

      if(data.status === 401){
        console.log("❌ Error");
        setFormState("error");
      }else{
        const result = await data.json();
        console.log("✅ Success",result);
        localStorage.setItem('token', result.token) // the token value is in the result (console.log)
        navigate("/home");
      }
    

    }
  });

  return(
    <form onSubmit={handleSubmit} className='login-form'>
  
    <h1>Login</h1>
    <TextField label="Username" variant="outlined" onChange={handleChange} value={values.username} name="username"/>
    <TextField label="Password" variant="outlined" onChange={handleChange} value={values.password} name="password"/>
    <Button color={formState} type="submit" variant="contained">
    {formState === "error" ? "Retry" : "Login"}
    </Button>
    <Button  type="submit" variant="contained" onClick={handleClick}>
    I am new
    </Button>
    </form>
  )
}

function Signup() {
 

  return(
    <form  className='login-form'>
  
    <h1>Signup</h1>
    <TextField label="Username" variant="outlined" name="username"/>
    <TextField label="Password" variant="outlined" name="password"/>
    <Button  type="submit" variant="contained">
    Signup
    </Button>
    </form>
  )
}


export default App;
