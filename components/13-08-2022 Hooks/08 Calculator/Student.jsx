import React,{useState} from "react";

function Student()
{
    let [a,setA]=useState(0);
    let [b,setB]=useState(0);
    let [res,setRes]=useState(0);

    let add=()=> setRes(a+b);
    let sub=()=> setRes(a-b);
    let mul=()=>
    {
        setRes(a*b)
    }
    let divide=()=>
    {
        setRes(a/b)
    }
    let mod=()=>
    {
        setRes(a%b)
    }


    let updateA=(e)=>
    {
        setA(parseInt(e.target.value))
        //! Fetching into variable e, parsing into integer and setting this value to A
    }

    let updateB=(e)=>
    {
        setB(parseInt(e.target.value))
        //! Fetching into variable e, parsing into integer and setting this value to A
    }

return (
    <div>
        <h1>A={a}</h1>
        <h1>B={b}</h1>
        <h1>Result={res}</h1>
        <input type="number" placeholder="Enter value of A" onChange={updateA}/><br/>
        <input type="number" placeholder="Enter value of B" onChange={updateB}/><br/>
        <button style={{marginLeft: "20px"}} onClick={add}>+</button>
        <button style={{marginLeft: "20px"}} onClick={sub}>-</button>
        <button style={{marginLeft: "20px"}} onClick={mul}>*</button>
        <button style={{marginLeft: "20px"}} onClick={divide}>/</button>
        <button style={{marginLeft: "20px"}} onClick={mod}>%</button>
    </div>
)
}
export default Student;