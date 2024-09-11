import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const wordsArray = text.trim().split(/\s+/);
    const wordCount = wordsArray.filter(word => word.length > 0).length;

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text );
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case.", "success");
    }

    const handleLoClick = () => {
        // console.log("Lowercase was clicked " + text );
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case.", "success");
    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked " + text );
        let newText= '';
        setText(newText);
        props.showAlert("Text Cleared.", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard.", "success");
    }

    const handleExtraSpaces = () => {
        let text1 = text.split(/[ ]+/);
        setText(text1.join(" "));
        props.showAlert("Extra spaces deleted from text.", "success");
    }

    return (
        <>
            <div className="container"  style={{color: `${props.mode === 'dark' ? 'white': '#042743'}` }}>
                <h1> {props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} placeholder='Enter text here' style={{backgroundColor: `${props.mode === 'dark' ? '#13466e': 'white'}`, color: `${props.mode === 'dark' ? 'white': '#042743'}`  }}></textarea>
                </div>
                
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick} >Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick} >Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy} >Copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}> Remove Extra Spaces </button>




            </div>

            <div className="container my-4" style={{color: `${props.mode === 'dark' ? 'white': '#042743'}` }}>
                <h2>Your text summary</h2>

                <p> {wordCount} words and {text.length} characters. </p>

                <p> {0.008 * wordCount} Minutes read </p>

                <h2>Preview</h2>
                <p style={{ fontSize: '18px', opacity: '0.5' }}> {text.length>0 ?text: "Write something to preview"} </p>
            </div>
        </>
    )
}
