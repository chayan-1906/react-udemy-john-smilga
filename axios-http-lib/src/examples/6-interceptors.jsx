import {useEffect} from 'react'
import {authFetch} from '../axios/interceptors.jsx'

const url = 'https://course-api.com/react-store-products'

export const Interceptors = () => {
    const fetchData = async () => {
        try {
            const response = await authFetch('/react-store-products')
        } catch (error) {
            if (error.response.status === 404) {
                // do something
                console.log('NOT FOUND')
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <h2 className='text-center'>interceptors</h2>
}
