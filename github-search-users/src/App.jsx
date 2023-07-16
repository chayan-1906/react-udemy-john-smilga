import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Dashboard, Login, PrivateRoute, AuthWrapper, Error} from './pages';

function App() {
    return (
        <div>
            <Dashboard></Dashboard>
            <Login/>
            <Error/>
        </div>
    );
}

export default App
