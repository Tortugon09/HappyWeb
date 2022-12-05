import {Modal} from "./Modal.jsx";
import {Contenido} from "./BodyProductsStyles.jsx";
import {useContext, useState} from "react";
import {CartContext} from "../../../Context/CartContext.jsx";

export function TableDates({data}) {
    let {id,name,description,price,quantity} = data;
    const {editProduct,delateProduct} = useContext(CartContext);
    const [modal2, setmodal2] = useState(false);

    const [product, setproduct] = useState({
        id: id ,
        description: "",
        name:"",
        price: "",
        quantity:"",
    });

    const handleChange = e => {
        setproduct({...product ,[e.target.name]: e.target.value})
        console.log(product)
    }
    const handleSubmit = e => {
        e.preventDefault()
        editProduct(product);
    }

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td className="button-tr"><button onClick={() => delateProduct(product)} className="del">Eliminar</button></td>
                <td className="button-tr"><button onClick={() => setmodal2(!modal2)} className="edit">Editar</button></td>
            </tr>
            <Modal
                state={modal2}
                changestate={setmodal2}
                title="Editar"
            >
                <Contenido>
                    <form onSubmit={handleSubmit}>
                        <label>Price</label>
                        <input onChange={handleChange} name="price" type="number" id="price" htmlFor="price">
                        </input>
                        <label>Quantity</label>
                        <input onChange={handleChange} name="quantity" type="number" id="quantity" htmlFor="quantity">
                        </input>
                        <button>Enviar</button>
                    </form>
                </Contenido>
            </Modal>
        </>
    )
}