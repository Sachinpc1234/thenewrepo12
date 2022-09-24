import React from "react";
function Student({sname,sage}) {
    return (
        <div style={{border:"1px solid red",backgroundColor:"blue",color:"white",borderRadius:"20px",boxShadow:"1px 1px 30px 2px cyan",margin:"20px"}}>
            <h1>Name:{sname}</h1>
            <h1>Age:{sage}</h1>
        </div>
    )
}
export default Student;