import {useState} from 'react'
import './App.css'
import items from './data.jsx'
import {Categories} from "./Categories.jsx";
import {Menu} from "./Menu.jsx";

const allCategories = ['all', ...new Set(items.map((item) => item.category))]
console.log(allCategories)

export default function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState([]);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items)
            return
        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems)
    }

    return (
        <main>
            <section className='menu section'>
                <div className='title'>
                    <h2>our menu</h2>
                    <div className='underline'/>
                </div>
                <Categories categories={allCategories} filterItems={filterItems}/>
                <Menu items={menuItems}/>
            </section>
        </main>
    )
}
