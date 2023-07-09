import React from 'react'
import {SearchForm} from "../components/SearchForm.jsx";
import {CocktailList} from "../components/CocktailList.jsx";

export const Home = () => {
    return (
        <main>
            <SearchForm/>
            <CocktailList/>
        </main>
    )
}
