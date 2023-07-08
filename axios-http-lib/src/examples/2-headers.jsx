import {useState} from 'react'
import axios from "axios";

const url = 'https://icanhazdadjoke.com/'

export const Headers = () => {
    const [joke, setJoke] = useState('random dad joke');

    const fetchDadJoke = async () => {
        try {
            const {data} = await axios(url, {
                headers: {Accept: 'application/json'},
            })
            console.log(data.joke)
            setJoke(data.joke)
        } catch (e) {
            console.log(e.response)
        }
    }

    return (
        <section className='section text-center'>
            <button className='btn' onClick={fetchDadJoke}>random joke</button>
            <p className='dad-joke'>{joke}</p>
        </section>
    )
}
