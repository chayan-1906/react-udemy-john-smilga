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
    return (
        <GithubContext.Provider value={{githubUser, repos, githubFollowers}}>
            {children}
        </GithubContext.Provider>
    )
}

export {GithubContext, GithubProvider}
