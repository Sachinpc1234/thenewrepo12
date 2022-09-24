import React,{Component} from "react";
import Student from "./Student";
export default class Counter extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            toggle:true
        }
    }
addOrRemoveComponent=()=>
{
    this.setState({toggle:!this.state.toggle})
}
render()
{
    return(
        <div>
            {this.state.toggle?<Student/>:null}
            <button onClick={this.addOrRemoveComponent}>Toggle Component</button>
        </div>
    )
}


}