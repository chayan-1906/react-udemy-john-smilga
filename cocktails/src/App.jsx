import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar.jsx";
import {Home} from "./pages/Home.jsx";
import {About} from "./pages/About.jsx";
import {SingleCocktail} from "./pages/SingleCocktail.jsx";
import {Error} from "./pages/Error.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/cocktail/:id' element={<SingleCocktail/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
