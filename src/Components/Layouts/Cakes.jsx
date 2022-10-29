import {Navbar} from "../Header/Navbar";
import {BodyCakes} from "../Body/Cakes/BodyCakes";

export function Cakes({products, handleAddProduct}) {
    return (
        <>
        <Navbar></Navbar>
        <BodyCakes products={products} handleAddProduct={handleAddProduct} ></BodyCakes>
        </>
    )
}