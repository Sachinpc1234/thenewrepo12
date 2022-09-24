import React from 'react'
import Array from './components/27-07-2022/Array_without_index/Array'
import StudentArray from './components/27-07-2022/Array_without_index/StudentArray'

function App() {

  return (
    <div>
     {Array.map(function(student,index)
     {return(
      <StudentArray ename={student.ename} eage={student.eage}/>
     )}
     )}
    </div>
  )
}
export default App;