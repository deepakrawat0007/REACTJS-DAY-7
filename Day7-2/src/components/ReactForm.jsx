import { useState } from "react";
import "./reactform.css";

const Form = ()=>{
    const [data , setData] = useState({name:"" , age:"" ,gender:"none" , occupation:"none" ,isCool:false})
    const [popup , setPopup] = useState(false)
    const handleSubmit=(e)=>{
    e.preventDefault()
    setPopup(true)
    }
    const handleHide =()=>{
        setPopup(false)
    }
    return(

        <div>
            {popup?<div className="popup">
                <h2>Success!!</h2>
                <h3>Name:{data.name}</h3>
                <h3>Age:{data.age}</h3>
                <h3>Gender:{data.gender}</h3>
                <h3>Occupation:{data.occupation}</h3>
                <h3>IsCool:{data.isCool?"Yes":"No"}</h3>
                <button onClick={handleHide}>OK</button>
            </div>:""}
        <div className="result">{`{"name":"${data.name}", "age":"${data.age}" , "gender":"${data.gender}" , "Occupation":"${data.occupation}" , "isCool":"${data.isCool}"}`}</div>
<form onSubmit={(e)=>{handleSubmit(e)}}>
   
    <input type={"text"} placeholder="Name" onChange={(e)=>{setData({...data,name:e.target.value})}}/>
    <input type={"number"} placeholder="Age" onChange={(e)=>{setData({...data,age:e.target.value})}}/>
    <label>
    <input
        type="radio"
        name="gender"
        value="male"
        checked={data.gender === "male"}
        onChange={(e)=>{setData({...data,gender:e.target.value})}}
    />
    Male
</label>
<label>
    <input
        type="radio"
        name="gender"
        value="female"
        checked={data.gender === "female"}
        onChange={(e)=>{setData({...data,gender:e.target.value})}}
    />
    Female
</label>
<label>
    <input
        type="radio"
        name="gender"
        value="Other"
        checked={data.gender === "Other"}
        onChange={(e)=>{setData({...data,gender:e.target.value})}}
    />
    Other
</label>
<select value={data.occupation} onChange={(e)=>{setData({...data,occupation:e.target.value})}}>
    <option value="">Select occupation</option>
    <option value="Full Stack">Full Stack</option>
    <option value="Front-End">Front-End</option>
    <option value="Back-End">Back-End</option>
</select>
<label>
    <input
        type="checkbox"
        checked={data.isCool}
        onChange={(e)=>{setData({...data,isCool:e.target.checked})}}
    />
    Are You Cool?
</label>
<button type="submit">Submit</button>
</form>
        </div>
    )
}

export default Form;