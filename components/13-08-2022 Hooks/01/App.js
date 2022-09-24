import React from 'react'
import { useState } from 'react';
import './App.css';

function App()
{
    let [count,setCount]=useState(2);
    console.log(count);
    console.log(setCount);

    return(
        <div className='App'>
            <h1>I don't know anything in React</h1>
            <Student/>
        </div>

    )
}
export default App;