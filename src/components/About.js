import React, { useState } from 'react'

export default function About(props) {
    /* 
    
    const [myStyle, setMyStyle] = useState(
        {
            color: "black",
            backgroundColor: "white",
            border: '1px solid white'
        }
    )

    */
    
    let myStyle = {
        color : props.mode === "dark" ? "white" : "#042743" , 
        backgroundColor : props.mode === "dark" ? "rgb(36 74 104)" : "white",
    }

    return (
        <div className="container">
            <h1 className='my-3' style={{color : props.mode === "dark" ? "white" : "#042743"}}>About us</h1>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyse your text</strong>
                        </button>
                    </h2>
                    
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils gives you a way to analyse your text quickly and efficiently.
                        </div>
                    </div>
                </div>
                
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
    
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a free character counter that provides intant character count & word count statistics for a given text. It reports the number of characters and words. Thus it is suitable for writing articles with a word limit.
                        </div>
                    </div>
                </div>
                
                
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                        </button>
                    </h2>

                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils works in any web browser such as Google Chrome, Microsoft Edge, Brave, Opera, Opera Mini, Opera Gx and so on. It suits to count characters in blogs, books, articles, documents, essays, etc.
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

