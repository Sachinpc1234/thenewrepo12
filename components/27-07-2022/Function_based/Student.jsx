import React from "react";
import "./Student.css"
function Student(props)
{
    return(
        <div className="A">
            <h1>{props.sname}</h1>
            <h1>{props.sage}</h1>
        </div>
    )
}
export default Student;