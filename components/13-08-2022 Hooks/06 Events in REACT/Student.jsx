import React from "react";

function Student()
{
    let m1=(e)=>{
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
    }

return (
    <div>
        <button onClick={m1}>Click here</button>
        <h1 onMouseOver={m1}>Hover here</h1>
        <input type="text" onChange={m1}/>
    </div>
)
}
export default Student;