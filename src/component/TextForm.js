import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpperClick = () => {
        console.log("Button clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = () => {
        console.log("Button clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("handle Button clicked");
        setText(event.target.value);
    }

    return (
        <>

            <div className='container'>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">{props.heading}</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert To Lowercase</button>
            </div>
            <div className='contaner my-3'>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>It will take {.0008 * text.split(" ").length} minutes to read.</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
