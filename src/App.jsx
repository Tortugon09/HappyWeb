import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./Components/Layouts/Home";
import {FormLogIn} from "./Components/Layouts/FormLogIn";
import {FormRegister} from "./Components/Layouts/FormRegister";
import {Cakes} from "./Components/Layouts/Cakes";
import {ShoppingCart} from "./Components/Layouts/ShoppingCart.jsx";
import {CartProvider} from "./Context/CartContext";
import {ControlPanel} from "./ControlPanel/ControlPanel";
import {PanelHome} from "./ControlPanel/Layouts/PanelHome";
import {ProductsPanel} from "./ControlPanel/Layouts/ProductsPanel";
import {Provider} from "react-redux";
import store from "./store/index.jsx";
import {UserDates} from "./Components/Layouts/UserDates";

function App() {
  return (
            <div className="App">
                <BrowserRouter>
                    <Provider store={store}>
                        <CartProvider>
                    <Routes>
                        <Route path={"/HappyWeb/"} element={<Home></Home>}></Route>
                        <Route path={"/HappyWeb/LogIn"} element={<FormLogIn></FormLogIn>}></Route>
                        <Route path={"/HappyWeb/Register"} element={<FormRegister></FormRegister>}></Route>
                        <Route path={"/HappyWeb/Pasteles"} element={<Cakes></Cakes>}></Route>
                        <Route path={"/HappyWeb/ShoppingCar"} element={<ShoppingCart></ShoppingCart>}></Route>
                        <Route path={"/HappyWeb/UserDates"} element={<UserDates></UserDates>}></Route>
                        <Route path={"/HappyWeb/ControlPanel"} element={<ControlPanel></ControlPanel>}></Route>
                        <Route path={"/HappyWeb/PanelHome"} element={<PanelHome></PanelHome>}></Route>
                        <Route path={"/HappyWeb/ControlPanel/Products"} element={<ProductsPanel></ProductsPanel>}></Route>
                    </Routes>
                        </CartProvider>
                    </Provider>
                </BrowserRouter>
            </div>

  )
}

export default App
