import React from 'react'
import Student from "./components/27-07-2022/Link arrays/Student"
import {studentDetails} from "./components/27-07-2022/Link arrays/studentDetails"
function App() {

  return (
    <div>
      {studentDetails.map(function({sname,sage,sid})
      {
        return(<Student key={sid} sname={sname} sage={sage} />)
      }
      )}
    </div>
  )
}

export default App