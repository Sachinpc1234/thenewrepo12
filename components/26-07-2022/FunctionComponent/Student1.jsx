import React from "react";
function Student1()
{
let a=20;
let emp={ename:"ABC",eage:30};
return (
    <div>
        <h1 className="A">J Spiders Java Training Centre</h1>
        <h1>Welcome to Q Spiders Basavangudi</h1>
        <label htmlFor=""></label>
        <input type="text"></input>
        <h1>{a}</h1>
        <h1>{emp.ename}</h1><hr/>
        <h1>{emp.eage}</h1><hr/>
    </div>
)
}
export default Student1;