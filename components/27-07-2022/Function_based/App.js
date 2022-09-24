import React from 'react'
import Student from './components/27-07-2022/Function_based/Student.jsx'
import StudentDetails from './components/27-07-2022/Function_based/StudentDetails.js'
function App() {

  return (
    <div>
    {StudentDetails.map(function({sname,sage,sid})
        {return(
         <Student key={sid} sname={sname} sage={sage}/>
        )}
        )}
  </div>
  )
}

export default App