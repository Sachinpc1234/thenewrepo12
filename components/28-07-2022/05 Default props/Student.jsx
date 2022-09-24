import React from "react";
function Student(props) {
    
    let myStyles=
    {
        border:"1px solid red",
        backgroundColor:"blue",
        color:"white",
        borderRadius:"20px",
        boxShadow:"1px 1px 30px 2px cyan",
        margin:"20px"
    };

    return (
        <div style={myStyles}>
            <h1>Name:{props.sname}</h1>
            <h1>Age:{props.sage}</h1>
            <h1>Dept:{props.sdept}</h1>
            {props.children}
        </div>
    )
}
Student.defaultProps=
{
    sage:"Age not known",
    sdept:"Data not available"
};

//! For defaultProps, no info should be present in the elements (Check in array)
//? For ex, ABC7, 8 and 9 has no sdept
//! Even if empty sdept is given, defaultProps doesn't work

export default Student;