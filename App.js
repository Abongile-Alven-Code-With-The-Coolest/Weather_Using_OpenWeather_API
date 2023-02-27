import React, {useState} from 'react';

import './css/style.css';
import { PasswordServices } from './services/PasswordServices';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function App() {
  const [copied,setCopied]=useState(false)
  let [state,setState]=useState({
    symbols: false,
    numbers:false,
    lower:false,
    upper:false,
    generatedPassword:'',
    passwordLength:20 ,
  })
 
  let updateInput=(e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }
  let updateCheck=(e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.checked
    })
  }
 let submit=(e)=>{
    e.preventDefault()
    let passwordObj=PasswordServices.getPasswordObj(state)
    let thePassword=PasswordServices.generatePassword(passwordObj,state.passwordLength)
    setState({...state, generatedPassword:thePassword})
    console.log(state)
  }
  
  return (
   
    <div>
            <form onSubmit={submit} className="formStyle">
                <h2>Password Generator</h2>
                    <div className="formContaner">
                       <div className='generatePasswordContainer'>
                               
                                <input type="text" placeholder='Generated Password' 
                                value={state.generatedPassword}
                                onChange={updateInput}
                                name="generatedPassword"
                                className='passWordText'
                                />  
                                
                                <CopyToClipboard text={state.generatedPassword}
                                >
                                  <span className='btn-copy'>Copy To Clipboard</span></CopyToClipboard>
                       </div>


{/* settings  */}

          <div className='formSettings'>
                  <br/>
                  <div className='length'>Max-Length :
                              <input type="number" placeholder='Password Length'
                              required={true}
                              value={state.passwordLength}
                              onChange={updateInput}                        
                              name="passWordLength"
                              className='passwordLengthNum'
                              />
                  </div>

                


                  <label>
                  <input type="checkbox" 
                  onChange={updateCheck}
                  value={state.symbols}
                  name="symbols"
                  />Symbols = @#$%
                  </label>

                  <label>
                  <input type="checkbox"
                  onChange={updateCheck}
                  value={state.lower}
                  name="lower"
                  />LowerCase = abc
                  </label>

                  <label>
                  <input type="checkbox"
                  onChange={updateCheck}
                  value={state.upper}
                  name="upper"
                  />UpperCase = ABC
                  </label>

                  <label>
                  <input type="checkbox"
                  onChange={updateCheck}
                  value={state.numbers}
                  name="numbers"
                  />Numbers = 0-9
                  </label>
          </div>
                  <button type="submit" value="Generate Password" className='button glow-button'>
                  Submit
                  </button>
        </div>
        </form>
    </div>
  );
}

export default App;
