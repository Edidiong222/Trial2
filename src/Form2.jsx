import { useState } from "react";
import form2Image from'./images/illustration-empty.svg'; 


function Form2() {

    return(
        <div className="Form2">
             <div  className="form2">
          <div className='form2cover'>
            <div className="form2Image">
              <img src={form2Image} alt="" />
            </div><div className="text">
            <h3>Results shown here</h3><br />
            <h5>Complete the form and click calculate repayments to see what your repayment would be</h5>
          </div>
          </div>
        </div>
        </div>
    )
}

export default Form2