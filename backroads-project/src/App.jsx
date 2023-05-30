import './App.css'
import {Navbar} from "./components/Navbar.jsx";
import {Hero} from "./components/Hero.jsx";
import {About} from "./components/About.jsx";
import {Services} from "./components/Services.jsx";
import {Tours} from "./components/Tours.jsx";
import {Footer} from "./components/Footer.jsx";

function App() {
    return <>
        <Navbar/>

        <Hero/>

        <About/>

        <Services/>

        <Tours/>

        <Footer/>
    </>
}

export default App
