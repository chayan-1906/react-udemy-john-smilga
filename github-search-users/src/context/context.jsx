import React, {useState, useEffect} from 'react'
import mockUser from './mockData.js/MockUser.jsx'
import mockRepos from './mockData.js/MockRepos.jsx'
import mockFollowers from './mockData.js/MockFollowers.jsx'
import axios from 'axios'

const rootUrl = 'https://api.github.com'

const GithubContext = React.createContext()

// Provider, Consumer - GithubContext.Provider

const GithubProvider = ({children}) => {
    const [githubUser, setGithubUser] = useState(mockUser)
    const [repos, setRepos] = useState(mockRepos)
    const [githubFollowers, setGithubFollowers] = useState(mockFollowers)
    const [requests, setRequests] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({show: false, msg: ''})

    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`)
            .then(({data}) => {
                let {rate: {remaining}} = data
                setRequests(remaining)
                if (remaining === 0) {
                    toggleError(true, 'sorry, you have exceeded your hourly rate limit!')
                }
            })
            .catch((error) => console.log(error))
    }

    function toggleError(show = false, msg = '') {
        setError({show, msg})
    }

    useEffect(() => checkRequests(), [])

    return (
        <GithubContext.Provider value={{githubUser, repos, githubFollowers, requests, error}}>
            {children}
        </GithubContext.Provider>
    )
}

export {GithubContext, GithubProvider}