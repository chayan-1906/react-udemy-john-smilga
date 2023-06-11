import './App.css'
import {useState} from "react";
import Values from "values.js";
import {SingleColor} from "./SingleColor.jsx";

function App() {
    const [color, setColor] = useState('')
    const [error, setError] = useState(false)
    const [listColors, setListColors] = useState(new Values('#90EE90').all(10))

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            let colors = new Values(color).all(10)
            setListColors(colors)
            setError(false)
        } catch (e) {
            setError(true)
            console.log(error)
        }
    }

    return (
        <>
            <section className='container'>
                <h3>color generator</h3>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={color}
                           placeholder='#90EE90'
                           className={`${error ? 'error' : null}`}
                           onChange={(e) => setColor(e.target.value)}/>
                    <button className='btn' type='submit'>submit</button>
                </form>
            </section>
            <section className='colors'>
                {listColors.map((color, index) => {
                    return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
                })}
            </section>
        </>
    )
}

export default App
