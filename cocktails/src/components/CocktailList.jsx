import React from 'react'
import {useGlobalContext} from "../context.jsx"
import {Loading} from "./Loading.jsx"
import {Cocktail} from "./Cocktail.jsx";

export const CocktailList = () => {
    const {cocktails, loading} = useGlobalContext()

    if (loading) {
        return <Loading/>
    }

    if (cocktails.length < 1) {
        return <h2 className='section-title'>no cocktails matched your criteria</h2>
    }

    return (
        <section className='section'>
            <h2 className='section-title'>cocktails</h2>
            <div className='cocktails-center'>
                {
                    cocktails.map((cocktail) => {
                        return <Cocktail key={cocktail.id} {...cocktail}/>
                    })
                }
            </div>
        </section>
    )
}
