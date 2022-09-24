import React,{useState} from "react";
function Student() {

    let [sname,setSname]=useState("");
    let [age,setAge]=useState();
    let [mob,setMob]=useState();
    let [email,setEmail]=useState("");
    //! Passing null string as initial values for sname, age, mob and email

    let updateName=(e)=>
    {
        setSname(e.target.value);
    }
    let updateAge=(e)=>setAge(e.target.value);
    let updateMob=(e)=>setMob(e.target.value);
    
    let updateEmail=(e)=>
    {
        setEmail(e.target.value);
    }

    return(
        <form>
            <h1>Name={sname}</h1>
            <h1>Age={age}</h1>
            <h1>Email={email}</h1>
            <h1>Mobile={mob}</h1>

            <input type="text" placeholder="Enter your name" onChange={updateName} /><hr/>
            <input type="number" placeholder="Enter your age" onChange={updateAge} /><hr/>
            <input type="number" placeholder="Enter your mobile number" onChange={updateMob} /><hr/>
            <input type="email" placeholder="Enter your email" onChange={updateEmail} /><hr/>

        </form>
    )
}
export default Student;