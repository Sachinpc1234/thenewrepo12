import React from 'react'
import Student from "./components/28-07-2022/05 Default props/Student"
import Array from "./components/28-07-2022/05 Default props/Array";
function App() {

  return (
    <div>
      {
      Array.map(function({sname,sage,sid,sdept})
      {
        return(<Student key={sid} sname={sname} sdept={sdept} sage={sage}>
          Same children props for all elements
        </Student>
        )
      })
    }
    </div>
  )
}

export default App;