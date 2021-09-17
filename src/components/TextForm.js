import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    let reverseBtn = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Converted to Reverse", "success");
      };

      let cleartxBtn = () => {
          let newText = ' ';
          setText(newText);
          props.showAlert("Clear the text", "success");
      }

    const handleOnClick = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnClick} 
                style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#042743'}} 
                value={text} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={reverseBtn}>Convert to InverseCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={cleartxBtn}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text Summary</h1>
            <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</b></p>
            <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</b></p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
