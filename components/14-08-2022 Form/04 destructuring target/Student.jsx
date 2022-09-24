import React,{useState} from "react";
function Student() {

    let [student,setStudent]=useState({sname:"",age:"",mobile:"",email:""});

    let updateStudent=(e)=>
    {
        let {name,value}=e.target
        setStudent({...student,[name]:value})
    }
    //! name is html tag
    //? Here we are targeting the name of the field from where the function is called
    //! The tag names must be properly specified
    //? The html attribute values of name must be same as object key

    return(
        <form>
            <h1>{JSON.stringify(student)}</h1>
            <h1>Name= {student.sname}</h1>            
            <h1>Age= {student.age}</h1> 
            <h1>Mobile number= {student.mobile}</h1>            
            <h1>Email ID= {student.email}</h1>            

            <input type="text" placeholder="Enter your name" onChange={updateStudent} name="sname" /><hr/>
            <input type="number" placeholder="Enter your age" onChange={updateStudent} name="age" /><hr/>
            <input type="number" placeholder="Enter your mobile number" onChange={updateStudent} name="mobile" /><hr/>
            <input type="email" placeholder="Enter your email" onChange={updateStudent} name="email" /><hr/>

            <h2>The html attribute <strong style={{color:"red"}}>name</strong> must have the same values as the keys of the object</h2>
            <h2 style={{color:"blue"}}>Here we are targeting the name of the field from where the function is called</h2>
        </form>
    )
}
export default Student;