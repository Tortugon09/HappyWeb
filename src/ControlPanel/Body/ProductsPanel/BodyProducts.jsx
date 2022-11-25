import {TableDates} from "./TableDates";
import {useContext, useState} from "react";
import {CartContext} from "../../../Context/CartContext.jsx";
import {BodyProductsContainer, Contenido, FormContainer} from "./BodyProductsStyles";
import {Modal} from "./Modal";

export function BodyProducts() {
    const {products,addProduct,editProduct} = useContext(CartContext);
    const [modal1, setmodal1] = useState(false)
    const [product, setproduct] = useState({
        id:0 ,
        description: "",
        name:"",
        price: 0,
        quantity:0,
    });

    const handleChange = e => {
        setproduct({...product ,[e.target.name]: e.target.value})
        console.log(product)
    }
    const handleSubmit = e => {
        e.preventDefault()
        addProduct(product);
        setmodal1(!modal1)
    }

        return (
        <>
        <BodyProductsContainer>
            <div className="body-header">
                <h1>Productos en venta</h1>
                <button onClick={() => setmodal1(!modal1)}>Add</button>
            </div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Description</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                {products.map((product) => <TableDates
                    key={product.id}
                    data={product}/>) }
            </table>
            <Modal
                state={modal1}
                changestate={setmodal1}
                title="Agregar"
            >
                <Contenido>
                        <form onSubmit={handleSubmit}>
                            <label>Description</label>
                            <input onChange={handleChange} name="description" type="text" id="description" htmlFor="description">
                            </input>
                            <label>Name</label>
                            <input onChange={handleChange} name="name" type="text" id="name" htmlFor="name">
                            </input>
                            <label>Price</label>
                            <input onChange={handleChange} name="price" type="number" id="price" htmlFor="price">
                            </input>
                            <label>Quantity</label>
                            <input onChange={handleChange} name="quantity" type="number" id="quantity" htmlFor="quantity">
                            </input>
                            <button>Agregar</button>
                        </form>
                </Contenido>
            </Modal>

        </BodyProductsContainer>
        </>
    )
}