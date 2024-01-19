import React ,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import './Register.css'

export const Register = (props) => {
  const[email,setEmail]=useState('');
  const[pass,setPass]=useState('');
  const[Name,setName]=useState('');
  const[UserType,setUserType]=useState('');
  // const handleSubmit = () => {
  //   email.preventDefault();
  //     console.log(email);
  // }

  const handlePersonTypeChange = (e) => {
    setUserType(e.target.value);
  };
  
  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate('/Choos');
  }
  const registerchange=()=>{
    navigate('/Login')
  }
  return (
    
    <div className="auth-form-container">
      <h2>Register</h2>
    <form className="register-form" >
      <label htmlFor="name">Full Name</label>
      <input value={Name} onChange={(e) => setName(e.target.value)}  name="name"id="name"  placeholder="full name" />
      <label htmlFor="email">Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="yourmail@gmail.com" id="email" name="email"/>
      <label htmlFor="password">PassWord</label>
      <input value={pass} onChange={(e) => setPass(e.target.value)}  type="password" placeholder="********" id="password" name="password"/>
      <label className="select-person">UserType :
        <select value={UserType} onChange={handlePersonTypeChange}>
          <option value="">Choose UserType</option>
          <option value=" Doctor ">Doctor </option>
          <option value=" Patient">Patient </option>
          <option value=" Student">Student </option>
        </select>
        </label>
         <button onClick={routeChange}>Log in</button>
      
    </form>
    <button className="link-btn" onClick={registerchange}>Already have Account? login Here</button>
    </div>
    
  )
}

