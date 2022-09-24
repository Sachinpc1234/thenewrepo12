import React from "react";
import "./Student.css";
function StudentArray(props){
    return(
        <div className="A">
            <h1>{props.ename}</h1>
            <h1>{props.eage}</h1>
        </div>
    )
};
export default StudentArray;