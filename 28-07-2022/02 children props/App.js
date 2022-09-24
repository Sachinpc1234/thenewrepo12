import React from 'react'
import Student from "./components/28-07-2022/02 children props/Student"
function App() {

  return (
    <div>
      <Student sname="B Shanmathi" sage={19}/>
      <Student sname="Soniya N" sage={22}>
        Soniya is my student
      </Student>
      <Student sname="Niharika" sage={19}>
        <h1>Niharika is also my student</h1>
      </Student>
    </div>
  )
}

export default App;