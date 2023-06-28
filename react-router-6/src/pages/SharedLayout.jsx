import {Outlet} from "react-router-dom"
import {Navbar} from "../components/Navbar.jsx"
import {StyledNavbar} from "../components/StyledNavbar.jsx";

const Home = () => {
    return (
        <>
            {/*<Navbar/>*/}
            <StyledNavbar/>
            <Outlet/>
        </>
    );
};
export default Home;
