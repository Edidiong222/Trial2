import { useState } from "react";


function Form3({secondCount,count}) {

    return(
        <div className="Form3">
              <div  className="form2">
          <div className='form2cover'>
            <div className="yourresults">
              <h2>Your results</h2><br/><h5>Your results are shown below based on
             the information you provided. To adjust
             the results, edit the form and click “calculate repayments” again.</h5></div>
           <div className="result">
            <div className="mainresult">
              <div id="monthly">
                <h3>Your monthly repayments </h3>
                <h1>£{secondCount}</h1>
              </div>
                <div className="line"></div>
              <div className="count">
         <h5>Total you'll repay over the term be </h5>
         <div>£{count}</div>
         </div>
              
            </div>
          
           </div>
           
          </div>
        </div>
        </div>
    )
}

export default Form3