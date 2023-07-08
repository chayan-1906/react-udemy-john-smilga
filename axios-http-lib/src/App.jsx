import './App.css'
import Title from "./components/Title.jsx";
import {FirstRequest} from './examples/1-first-request.jsx'
import {Headers} from './examples/2-headers.jsx'
import {PostRequest} from "./examples/3-post-request.jsx"
import {GlobalInstance} from "./examples/4-global-instance.jsx"
import {CustomInstance} from "./examples/5-custom-instance.jsx";

function App() {

    return (
        <main>
            <Title/>
            <FirstRequest/>
            <Headers/>
            <PostRequest/>
            <GlobalInstance/>
            <CustomInstance/>
        </main>
    )
}

export default App
