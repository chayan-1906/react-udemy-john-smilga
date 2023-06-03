import React, {useState} from 'react'
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

export const SingleQuestion = ({question}) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <article className='question'>
            <header>
                <h4>{question.title}</h4>
                <button className='btn' onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                </button>
            </header>
            {showInfo && <p style={{'textAlign': 'start'}}>{question.info}</p>}
        </article>
    )
}
