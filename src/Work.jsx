import React, { useRef, useState } from 'react'

function Work() {
  let [holder,setHold] = useState('')

  let boy = useRef();

  function ab() {
    setHold(boy.current.value)
  }


  return (
    <div>
      <input type="text" ref={boy} />
      <button onClick={ab}>click me</button>
      <p className='para'>{holder}</p>

    </div>
  )
}

export default Work

