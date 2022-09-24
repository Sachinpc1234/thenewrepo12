import React from "react";
import { useState } from 'react';

function Student()
{
    let [count,setCount]=useState(0);

return (
    <div>
        <h1>Counter = {count}</h1>
        <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
)
}
export default Student;