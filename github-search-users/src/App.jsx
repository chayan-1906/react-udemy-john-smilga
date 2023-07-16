import {useState} from 'react'
import './App.css'
import {Dashboard, Login, PrivateRoute, AuthWrapper, Error} from './pages'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Dashboard/>}/>
                <Route path='/login' exact element={<Login/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </Router>
    )
}

export default App
