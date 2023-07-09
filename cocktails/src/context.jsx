import React, {useCallback, useContext, useEffect, useState} from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('a')
    const [cocktails, setCocktails] = useState([])

    const fetchDrinks = useCallback( async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            const {drinks} = data
            if (drinks) {
                const fetchCocktails = drinks.map((drink) => {
                    const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = drink
                    return {id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass}
                })
                setCocktails(fetchCocktails)
            } else {
                setCocktails([])
            }
        } catch (error) {
            console.log(`error in fetching cocktails: ${error.response}`)
        } finally {
            setLoading(false)
        }
    }, [searchTerm])

    useEffect(() => {
        fetchDrinks()
    }, [searchTerm, fetchDrinks])

    return <AppContext.Provider value={{loading, cocktails, setSearchTerm}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
