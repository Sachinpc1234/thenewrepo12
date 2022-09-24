import React,{Component} from "react";
export default class Student extends Component
{
    constructor()
    {
        super();
        this.state={count:0}
    }

    updateCounter=()=>
    {
        this.setState({count:this.state.count+1})
        //! Increment operator ++ and decrement operator -- does not work
    }
    render()
    {
        console.log("Rendered");
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.updateCounter}>Increment</button>
            </div>
            //! Do not give paranthesis for function, otherwise the function is called directly
        )
    }

}