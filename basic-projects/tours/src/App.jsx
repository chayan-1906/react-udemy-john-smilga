import {useEffect, useState} from 'react'
import {Loading} from "./Loading.jsx";
import {Tours} from "./Tours.jsx";
import './App.css'

const url = 'https://course-api.com/react-tours-project'

export default function App() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetchTours()
    }, []);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours)
    }

    const fetchTours = async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const tours = await response.json()
            setTours(tours)
            setLoading(false)
            console.log(tours)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    if (tours.length === 0) {
        return (
            <main>
                <div className='title'>
                    <h2>no tours left</h2>
                    <button className='btn' onClick={fetchTours}>refresh</button>
                </div>
            </main>
        )
    }

    if (loading) {
        return (
            <main><Loading/></main>
        )
    }

    return <h2><Tours tours={tours} removeTour={removeTour}/></h2>
}
