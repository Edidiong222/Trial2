import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form2 from './Form2';
import Form1 from './Form1';
import "./Merriweather/Merriweather-BoldItalic.ttf"
import Form3 from './Form3';

function App() {

  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState()
  const [firstNum, setFirstNum] = useState()
  const [secondNum, setSecondNum] = useState()
  const [error, setError] = useState(false)
  const [thirdNum, setThirdNum] = useState()
  const [show, setShow] = useState(false)

  function Addition() {
   

    if (firstNum===0 || secondNum ==0|| thirdNum ===0){
      setShow(false)
      setError(true)
      console.log({count})
  }else{
    setShow(true)
    setCount((firstNum * secondNum * thirdNum) / 100)
    setSecondCount(Math.ceil(((firstNum * secondNum * thirdNum) / 100)/12))
    
    // console.log(count)
   
  }

  }
  console.log((secondCount))
  // console.log(Math.round(secondCount))
function Reverse(){
  setShow(false)
  setFirstNum("")
  setSecondNum("")
   setThirdNum("") 
}
  
  return (

    <div className="App">

      <div className='cover'>
      <Form1
       firstNum={firstNum}
       error={error}
       setFirstNum={setFirstNum}
      
       setSecondNum={setSecondNum}
       setThirdNum={setThirdNum}
       Reverse={Reverse} 
       secondNum={secondNum}
        thirdNum={thirdNum} Addition={Addition}/>
      

     {show?<Form3  secondCount={secondCount} count={count}/>:<Form2/>}
      </div>








    </div>

  )
}
export default App
