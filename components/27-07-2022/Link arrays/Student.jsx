import React, { Component } from 'react'
import "./Student.css"

export default class Student extends Component {

  render() {
    let {sname,sage}=this.props

    return (
    <div className="dinga">
        <h1>{sname}</h1>
        <h1>{sage}</h1>
    </div>
    )
  }
}
