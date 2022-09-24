import React from "react";
function Student(props) {
    return (
        <div style={{border:"1px solid red",backgroundColor:"blue",color:"white",borderRadius:"20px",boxShadow:"1px 1px 30px 2px cyan",margin:"20px"}}>
            <h1>Name:{props.sname}</h1>
            <h1>Age:{props.sage}</h1>
            {props.children}
        </div>
    )
}
export default Student;