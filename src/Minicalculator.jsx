import React, { useRef, useState } from 'react'

function Minicalculator() {

    let [ans,setAns] = useState(0)


    let n1 = useRef()
    let n2 = useRef()

    function add() {
        setAns(Number(n1.current.value) + Number(n2.current.value))
    }

    function minus() {
        setAns(Number(n1.current.value) - Number(n2.current.value))
    }

    function multiply() {
        setAns(Number(n1.current.value) * Number(n2.current.value))
    }

    function divide() {
        setAns(Number(n1.current.value) / Number(n2.current.value))
    }

  return (
    <div>
      num:1 <input type="text" ref={n1} /><br /><br />
      num:2 <input type="text" ref={n2} /><br /><br />
      <div className="wrapper">
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
      </div><br /><br />
      <h1>{ans}</h1>

    </div>
  )
}

export default Minicalculator
