import React from 'react'
import {Tour} from "./Tour.jsx";

// export const Tours = (props) => {
export const Tours = ({tours, removeTour}) => {

    // const {id, name, image, price, info} = tours

    return (
        <section>
            <div className='title'>
                <h2>our tours</h2>
                <div className='underline'></div>
            </div>
            {tours.map(tour => {return <Tour key={tour.id} tour={tour} removeTour={removeTour}></Tour>})}
        </section>
    )
}
