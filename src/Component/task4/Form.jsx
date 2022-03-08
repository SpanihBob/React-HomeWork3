import React, {useState} from 'react';
import MyInput from "./myInput/MyInput";
import MyButton from "./myButton/MyButton";
import EnterImg from './EnterImg';

function Form() {
  const validData = {
    login: "V",
    password: "V",
    email: "V"
  }
  const [log, setLog] = useState("");
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");
    
  let [code, changeCode] = useState(false);

  const moveOn = (event) => {
    event.preventDefault();
    if (log===validData.login && pass===validData.password && mail===validData.email) {
      changeCode(true)       
    }
  }

  return (
    
    <div>
        {code===false && 
        <form action="POST" style={{display:"flex", flexDirection:"column"}}>            
            <MyInput  type="text" 
                      placeholder="login" 
                      required
                      value={log}
                      onChange={e =>setLog(e.target.value)} />
            <MyInput  type="text" 
                      placeholder="password" 
                      required 
                      value={pass}
                      onChange={e =>setPass(e.target.value)} />
            <MyInput  type="text" 
                      placeholder="email" 
                      required 
                      value={mail}
                      onChange={e =>setMail(e.target.value)} />
            <MyButton onClick={moveOn}>Enter</MyButton>            
        </form> }
        {code===true && <EnterImg />}     
    </div>
  );
}

export default Form;

