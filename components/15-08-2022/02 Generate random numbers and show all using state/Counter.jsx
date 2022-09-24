import React,{useState} from "react";
function Counter()
{
    let [numbers, setNumbers] = useState([{rand:1}]);
    let updateNumbers=()=>
    {
        setNumbers([...numbers,{rand:Math.random()}])
    }
    console.log(Math.random());

    return(
        <div>
            {numbers.map((ele,ind)=>
            {
                return(
                    <li key={ind}>{ele.rand}</li>
                )
            }
            )}
            <button onClick={updateNumbers}>Update</button>
        </div>
    )
    
}
export default Counter;