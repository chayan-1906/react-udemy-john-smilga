import React from 'react'
import {Info, Repos, User, Search, Navbar} from '../components'
import loadingImage from '../images/preloader.gif'
import {GithubContext} from '../context/context.jsx'

const Dashboard = () => {
    return (
        <main>
            {/*<Navbar/>*/}
            {/*<Search/>*/}
            <Info/>
            <User/>
            {/*<Repos/>*/}
        </main>
    )
}

export default Dashboard
