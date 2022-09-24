import React from 'react';
import Student from "./components/28-07-2022/07 Child to Parent data/Student";
import "./App.css";
function App() {

  let dataFromChild=(childData)=>
  {
    console.log(childData);
  }
  return (
    <div>
      {
        <Student mydata={dataFromChild}/>
      }
    </div>
  )
}

export default App; 