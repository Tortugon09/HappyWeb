import {Navbar} from "./Components/Header/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Components/Layouts/Home";
import {FormLogIn} from "./Components/Layouts/FormLogIn";
import {FormRegister} from "./Components/Layouts/FormRegister";
import {Cakes} from "./Components/Layouts/Cakes";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home></Home>}></Route>
                <Route path={"/LogIn"} element={<FormLogIn></FormLogIn>}></Route>
                <Route path={"/Register"} element={<FormRegister></FormRegister>}></Route>
                <Route path={"/Pasteles"} element={<Cakes></Cakes>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
