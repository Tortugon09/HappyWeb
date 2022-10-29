import {Navbar} from "./Components/Header/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Components/Layouts/Home";
import {FormLogIn} from "./Components/Layouts/FormLogIn";
import {FormRegister} from "./Components/Layouts/FormRegister";
import {Cakes} from "./Components/Layouts/Cakes";
import {ShoppingCart} from "./Components/Layouts/ShoppingCart.jsx";
import {CartProvider} from "./Context/CartContext";


function App() {
  return (
        <CartProvider>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path={"/HappyWeb"} element={<Home></Home>}></Route>
                        <Route path={"/HappyWeb/LogIn"} element={<FormLogIn></FormLogIn>}></Route>
                        <Route path={"/HappyWeb/Register"} element={<FormRegister></FormRegister>}></Route>
                        <Route path={"/HappyWeb/Pasteles"} element={<Cakes></Cakes>}></Route>
                        <Route path={"/HappyWeb/ShoppingCar"} element={<ShoppingCart></ShoppingCart>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </CartProvider>
  )
}

export default App
