import React,{useState} from "react";
function Student() {

    let [student,setStudent]=useState({sname:"",age:"",mobile:"",email:""});

    let updateName=(e)=>
    {
        setStudent({...student,sname:e.target.value});
        //! Using spread operator will take all elements of object student
        //? Again we are specifying different value for one of the key
        //* That particular key will be over written
    }
    let updateAge=(e)=>
    {
        setStudent({...student,age:e.target.value});
        //! Using spread operator will take all elements of object student
        //? Again we are specifying different value for one of the key
        //* That particular key will be over written
    }
    let updateMob=(e)=>
    {
        setStudent({...student,mobile:e.target.value});
        //! Using spread operator will take all elements of object student
        //? Again we are specifying different value for one of the key
        //* That particular key will be over written
    }
    let updateEmail=(e)=>
    {
        setStudent({...student,email:e.target.value});
        //! Using spread operator will take all elements of object student
        //? Again we are specifying different value for one of the key
        //* That particular key will be over written
    }
    

    return(
        <form>
            <h1>{JSON.stringify(student)}</h1>
            <h1>Name= {student.sname}</h1>            
            <h1>Age= {student.age}</h1> 
            <h1>Mobile number= {student.mobile}</h1>            
            <h1>Email ID= {student.email}</h1>            

            <input type="text" placeholder="Enter your name" onChange={updateName} /><hr/>
            <input type="number" placeholder="Enter your age" onChange={updateAge} /><hr/>
            <input type="number" placeholder="Enter your mobile number" onChange={updateMob} /><hr/>
            <input type="email" placeholder="Enter your email" onChange={updateEmail} /><hr/>

        </form>
    )
}
export default Student;