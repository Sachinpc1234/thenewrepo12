import React,{useState} from "react";
import {StudentInfo} from "./StudentInfo";
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

    let myAttributes={
        type:"text",
        placeholder:"username",
        required:"required",
        minLength:"6",
        maxLength:"20"
    }
    return(
        <form>
            <h1>{JSON.stringify(student)}</h1>
            <h1>Name= {student.sname}</h1>            
            <h1>Age= {student.age}</h1> 
            <h1>Mobile number= {student.mobile}</h1>            
            <h1>Email ID= {student.email}</h1>            

            {StudentInfo.map((stud,sid)=>
            {
                return(
                    <div key={sid}>
                        <input {...stud} onChange={updateStudent} />
                        <hr/>
                    </div>
                )
            }
            )}
        </form>
    )
}
export default Student;