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
    const handleClearClick = () => {
        console.log("Button clicked");
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("handle Button clicked");
        setText(event.target.value);
    }
    const handleCapitaliseClick = () => {
        const arr = text.split(" ");

//loop through each element of the array and capitalize the first letter.


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

const str2 = arr.join(" ");
        setText(str2);
    }

    return (
        <>

            <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">{props.heading}</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCapitaliseClick}>Capitalise Text</button>
            </div>
            <div className='contaner my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>It will take {.0008 * text.split(" ").length} minutes to read.</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Enter your text above to preview it here'}</p>
            </div>
        </>
    )
}
