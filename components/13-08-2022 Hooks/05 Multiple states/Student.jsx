import React from "react";
import { useState } from 'react';

function Student()
{
    let [count1,setCount1]=useState(0);
    let [count2,setCount2]=useState(0);


return (
    <div>
        <h1>Counter = {count1}</h1>
        <button onClick={()=>setCount1(count1+1)}>Increment by 1</button>
        <button onClick={()=>setCount1(count1-1)}>Decrement by 1</button>
        <button onClick={()=>setCount1(0)}>Reset</button>
        <hr/>
        <h1>Counter = {count2}</h1>
        <button onClick={()=>setCount2(count2+5)}>Increment by 5</button>
        <button onClick={()=>setCount2(count2-5)}>Decrement by 5</button>
        <button onClick={()=>setCount2(0)}>Reset</button>
    </div>
)
}
export default Student;