import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./home"
import Dashbord from "./dashbord"

function App(){

    return(
        <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home></Home>}></Route>
            <Route path={"/dash"} element={<Dashbord></Dashbord>}></Route>

        </Routes>
        
        </BrowserRouter>
    )

}export default App