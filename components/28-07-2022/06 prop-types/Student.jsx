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
    sdept:"Data not available"
};

//! For defaultProps, no info should be present in the elements (Check in array)
//? For ex, ABC7, 8 and 9 has no sdept
//! Even if empty sdept is given, defaultProps doesn't work

Student.propTypes=
{
sname:PropTypes.string,
sdept:PropTypes.string,
sage:PropTypes.number
};

//! PropTypes will restrict the data types for props
//? If other data type is used, we get error in CONSOLE
//* Age is given as number, but value entered is string


export default Student;