import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpperClick =()=>{
        console.log("Button clicked");
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleOnChange =(event)=>{
        console.log("handle Button clicked");
        setText(event.target.value);
    }
    
  return (
    <div>
  <div className="mb-3">
    <label htmlFor="myBox" className="form-label">{props.heading}</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpperClick}>Convert To Uppercase</button>
  </div>
  )
}
