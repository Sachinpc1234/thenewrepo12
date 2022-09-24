import React,{Component} from "react";
export default class Student extends Component
{
    componentDidMount()
    {
        console.log("Component was mounted");
    }
    componentWillUnmount()
    {
        console.log("Component was removed");
    }
    render()
    {
        return(
            <div>
                <h1>Componet displayed</h1>
            </div>
        )
    }


}