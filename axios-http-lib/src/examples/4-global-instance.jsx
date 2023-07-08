import {useEffect} from 'react'
import axios from "axios"

const productsUrl = 'https://course-api.com/react-store-products'
const randomUserUrl = 'https://randomuser.me/api'

export const GlobalInstance = () => {
    const fetchData = async () => {
        try {
            const response = await axios(productsUrl)
            console.log(response.data)
        } catch (e) {
            console.log(e.response)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <h2 className='text-center'>global instance</h2>;
}
