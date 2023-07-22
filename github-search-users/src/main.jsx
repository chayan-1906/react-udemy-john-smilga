import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {GithubProvider} from './context/context.jsx'
import {Auth0Provider} from '@auth0/auth0-react'

// domain: dev-25r8oc3ky07uheik.us.auth0.com
// clientId: 1P16EoWHHPlKGyVevPGi844zbj1ZOJaZ

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Auth0Provider
            domain='dev-25r8oc3ky07uheik.us.auth0.com'
            clientId='1P16EoWHHPlKGyVevPGi844zbj1ZOJaZ'
            redirectUri={window.location.origin}
            cacheLocation='localstorage'>
            <GithubProvider><App/></GithubProvider>
        </Auth0Provider>
    </React.StrictMode>
)
