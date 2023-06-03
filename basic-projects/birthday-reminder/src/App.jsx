import './App.css'
import List from "./List.jsx";
import {useState} from "react";
import data from "./data.jsx";

export default function App() {
    const [people, setPeople] = useState(data)

    return (
        <main>
            <section className='container'>
                <h3>{people.length} Birthdays today</h3>
                <List people={people}/>
                <button onClick={() => setPeople([])}>Clear All</button>
            </section>
        </main>
    )
}
