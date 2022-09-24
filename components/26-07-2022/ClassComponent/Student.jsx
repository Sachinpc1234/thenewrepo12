import React,{Component} from "react";
class Student extends Component
{
    a="J Spiders Java Training Center";
    //* The variable is in class
    //? Hence use {this.variable_name}

    emp={ename:"ABC",eage:123};
    //! This object has been converted to String using JSON.stringify()
    
    render()
    {
        return(
            <div>
                <h1 className="A">Welcome to J Spiders Basavangudi</h1>
                <h1>Welcome to Q Spiders Basavangudi</h1>
                <label htmlFor=""></label>
                <input type="text"/>
                <h2>{this.a}</h2>
                <h2>{this.emp.ename}<hr/>{this.emp.eage}</h2>
                <h2 onClick={alert("Hello")}>{JSON.stringify(this.emp)}</h2>
            </div>
            )
    }
}
export default Student;