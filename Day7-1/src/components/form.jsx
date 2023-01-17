import { useState } from "react";
import "./form.css";

const Form = () =>{
    const [data , setData] = useState({
        firstName:"",
        lastName:"",
        email:""
    })
    const [error, setError] = useState({});
    const [success, setSuccess] = useState(false);

    const handleSubmit =(e)=>{
        setSuccess(false)
        e.preventDefault()
        setError({});
    let hasError = false;

    if (!data.firstName) {
      setError(prevError => ({ ...prevError, firstName: 'First name is required' }));
      hasError = true;
    }
    if (!data.lastName) {
      setError(prevError => ({ ...prevError, lastName: 'Last name is required' }));
      hasError = true;
    }
    if (!data.email) {
      setError(prevError => ({ ...prevError, email: 'Email is required' }));
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      setError(prevError => ({ ...prevError, email: 'Invalid email address' }));
      hasError = true;
    }
    if (!hasError) {
        setSuccess(true);
      }
  
    }
    return(
        <div className="wrapper">
           <form onSubmit={(e)=>{handleSubmit(e)}}>
           {success && <p className="success">Registration successful!</p>}
            <input className="firstName" value={data.firstName} onChange={(e)=>{setSuccess(false); setError(prevError => ({ ...prevError, firstName: '' })); setData({...data,firstName:e.target.value})}} type={"text"} placeholder="First Name"/>
            {error.firstName && <p className="err">{error.firstName}</p>}
            <input type={"text"} value={data.lastName} onChange={(e)=>{setSuccess(false); setError(prevError => ({ ...prevError, lastName: '' })); setData({...data,lastName:e.target.value})}} placeholder="Last Name"/>
            {error.lastName && <p className="err">{error.lastName}</p>}
            <input type={"text"} value={data.email} onChange={(e)=>{setSuccess(false); setError(prevError => ({ ...prevError, email: '' })); setData({...data,email:e.target.value})}} placeholder="email"/>
            {error.email && <p className="err">{error.email}</p>}
            <button type="submit">Register</button>
           </form>
        </div>
    )
}

export default Form;