import { useState } from "react";
import CalcImage from './images/icon-calculator.svg';


function Form1({
  firstNum
  , secondNum,
  thirdNum, Addition, setFirstNum, setSecondNum, setThirdNum, setError, error,
  Reverse }) {

  const [plan, setPlan] = useState(true)


  return (
    <div className="Form1">
      <div className="form1">
        <div className="heading">
          <h2>Mortage Calculator</h2>
        </div>
        <br />

        <label>Mortgage Amount</label>
        <div className='labeldiv'>
          <div className='labelcover1'>

            <div className="sign">£</div>
            <input className='Amount' value={firstNum} onChange={(e) => setFirstNum(e.target.value)} type='number' />
          </div>
          {error ? <p>This field is required</p> : null}

        </div>


        <div className='Desecond'>
          <div className='labeldiv'>
            <label>Mortgage term</label>
            <div className="Termcover">
              <div className='labelcover'>
                <input className='term' value={secondNum} onChange={(e) => setSecondNum(e.target.value)} type='number' />
                <div className="sign2">years</div>
              </div>
            </div>
            {error ? <p>This field is required</p> : null}
          </div>
          <div id='space'></div>
          <div className='labeldiv  interest'>
            <label>Interest Rate</label>
            <div className="Termcover">
              <div className='labelcover2'>
                <input className='rate' value={thirdNum} onChange={(e) => setThirdNum(e.target.value)} type='number' />
                <div className="sign3">%</div>
              </div>
            </div>
            {error ? <p>This field is required</p> : null}

          </div>
        </div>

        <div className="Morgtage_type">
          <label >Mortgage type</label>
          <span>
            <input id='check'
              type="radio"
              value={"radio1"}
              name="plan"
              onChange={(e) => setPlan(e.target.value)}
            />
            <p><h4>Repayment</h4></p>
          </span>
          <span>
            <input

              id="check"
              type="radio"
              value={"radio2"}
              name="plan"
              onChange={(e) => setPlan(e.target.value)}
            />
            <p><h4>Interest Rate</h4></p>
          </span>
        </div>
        <div className="base">
          <button onClick={Addition} id='calc'><img src={CalcImage} alt="" />Calculate Repayments</button>
        </div>

          <span><button id="clear" onClick={Reverse}>Clear All</button></span>
      </div>

    </div>
  )
}

export default Form1;