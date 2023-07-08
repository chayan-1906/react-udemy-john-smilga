import {useEffect} from 'react'
import axios from 'axios'

const url = 'https://course-api.com/react-store-products'

export const FirstRequest = () => {
    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
      try {
          const response = await axios(url)
          console.log(response)
      } catch (e) {
          console.log(e.response)
      }
    }

    return <h2 className='text-center'>first request</h2>;
}
