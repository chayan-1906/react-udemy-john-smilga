import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Products from "./pages/Products.jsx"
import Error from "./pages/Error.jsx"
import SharedLayout from "./pages/SharedLayout.jsx"
import SingleProduct from "./pages/SingleProduct.jsx"
import {useState} from "react";
import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import {ProtectedRoute} from "./pages/ProtectedRoute.jsx"
import {SharedProductLayout} from "./pages/SharedProductLayout.jsx"

function App() {
    const [user, setUser] = useState(null)

    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<SharedLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='/about' element={<About/>}/>

                <Route path='/products' element={<SharedProductLayout/>}>
                    <Route index element={<Products/>}/>
                    <Route index path=':productId' element={<SingleProduct/>}/>
                </Route>

                <Route path='/login' element={<Login setUser={setUser}/>}/>
                <Route
                    path='/dashboard'
                    element={<ProtectedRoute user={user}><Dashboard user={user}/></ProtectedRoute>}
                />
                <Route path='*' element={<Error/>}/>
            </Route>
        </Routes>
        <footer>our footer</footer>
    </BrowserRouter>;
}

export default App
