import React from "react";
import "./Student.css";
function Student(A){
    //! props variable taken as A
    return(
        <div className="CSS">
            <h1>{A.sname}</h1>
            <h1>{A.sage}</h1>
        </div>
    )
}
export default Student;