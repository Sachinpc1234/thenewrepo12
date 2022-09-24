import React from "react";
import PropTypes from "prop-types";
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

// console.log(props);

let myName="KIRAN S M";
props.mydata(myName);

    return (
        <div style={myStyles}>
            <h2 style={{textAlign:"center"}}>Check console</h2>
        </div>
    )
}

export default Student;