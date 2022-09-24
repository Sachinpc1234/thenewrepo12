import React from 'react'
import Student from "./components/28-07-2022/04 child props, array and internal CSS/Student"
import Array from './components/28-07-2022/04 child props, array and internal CSS/Array';
function App() {

  return (
    <div>
      {
      Array.map(function({sname,sage,sid})
      {
        return(<Student key={sid} sname={sname} sage={sage}>
          Same children props for all elements
        </Student>
        )
      })
    }
    </div>
  )
}

export default App;