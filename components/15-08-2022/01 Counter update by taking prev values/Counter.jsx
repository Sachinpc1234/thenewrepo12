import React,{useState} from "react";
function Counter()
{
    let [count, setCount] = useState(0);
    let updateCount=()=>
    {
        for (let i=1;i<=5;i++)
        {
            setCount((prevCount)=>
            {
                return prevCount+1;
            })
        }
    }

    return(
        <div>
            <h1>Counter={count}</h1>
            <button onClick={updateCount}>Update</button>
        </div>
    )
    
}
export default Counter;