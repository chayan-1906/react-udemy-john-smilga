import {useState} from 'react'
import './App.css'
import {Dashboard, Login, PrivateRoute, AuthWrapper, Error} from './pages'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
    return (
        <AuthWrapper>
            <Router>
                <Routes>
                    <Route path='/' exact element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                    <Route path='/login' exact element={<Login/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            </Router>
        </AuthWrapper>
    )
}

export default App