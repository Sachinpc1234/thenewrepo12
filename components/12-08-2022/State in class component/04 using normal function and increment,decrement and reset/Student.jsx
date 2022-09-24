import React,{Component} from "react";
export default class Student extends Component
{
    constructor()
    {
        super();
        this.state={count:0};
        this.incrementCounter=this.incrementCounter.bind(this);
        this.decrementCounter=this.decrementCounter.bind(this);
        this.resetCounter=this.resetCounter.bind(this);
    }

    incrementCounter()
    {
        this.setState({count:this.state.count+1})
    }

    decrementCounter()
    {
        this.setState({count:this.state.count-1})
    }

    resetCounter()
    {
        this.setState({count:0})
    }


    render()
    {
        console.log("Rendered");
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.incrementCounter}>Increment</button>
                <button onClick={this.decrementCounter}>Decrement</button>
                <button onClick={this.resetCounter}>Reset</button>
            </div>
            //! Do not give paranthesis for function, otherwise the function is called directly
        )
    }

}