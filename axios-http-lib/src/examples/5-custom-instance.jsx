import {useEffect} from 'react'
import {authFetch} from '../axios/custom.jsx'
import axios from 'axios'

const randomUserUrl = 'https://randomuser.me/api'


export const CustomInstance = () => {
    const fetchData = async () => {
        try {
            const response1 = await authFetch('/react-store-products')
            const response2 = await axios(randomUserUrl)
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <h2 className='text-center'>custom instance</h2>
}
