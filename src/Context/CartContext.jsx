import {createContext, useState, useEffect, useReducer} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useHref} from "react-router";
import {useNavigate} from "react-router-dom";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
    const state = useSelector((state) => state);
    const {user} = state.users;
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([])
    const [userR, setUserR] = useState(() => {
        try {
            const ProductsInLocalStorage = localStorage.getItem('LoginUserR')
            return ProductsInLocalStorage ? JSON.parse(ProductsInLocalStorage) : []
        } catch (error) {
            return [];
        }
    })
    const [loginUser, setLoginUser] = useState(() => {
        try {
            const ProductsInLocalStorage = localStorage.getItem('LoginUser')
            return ProductsInLocalStorage ? JSON.parse(ProductsInLocalStorage) : [true]
        } catch (error) {
            return [true];
        }
    })
    console.log(users)

    const getProducts = async () => {
        await axios
            .get("http://localhost:8080/product")
            .then(({ data }) => setProducts(data.data));


    };
    useEffect(() =>{
        localStorage.setItem("LoginUser", JSON.stringify(loginUser))
    }, [loginUser]);
    useEffect(() =>{
        localStorage.setItem("LoginUserR", JSON.stringify(userR))
    }, [userR]);

    useEffect(() => {
        getProducts();
    }, []);
    useEffect(() => {
        getUser();
    }, []);

    const addProduct = async (product) => {
        const { description,name, quantity, price } = product;

        await axios.post("http://localhost:8080/product", { description ,name, price, quantity });

        getProducts();
    };
    const editProduct = async (product) => {
        const { id, description, name, quantity, price } = product;
        console.log(product)
        await axios
            .put(`http://localhost:8080/product/${id}`, { description , name, price, quantity });

        getProducts();
    };
    const getproductId = async (product) => {
        const { id } = product;
        console.log(product)
        await axios
            .get(`http://localhost:8080/product/${id}`)

        getProducts();
    };

    const delateProduct = async (product) => {
        const { id } = product;
        console.log(product)
        await axios
            .delete(`http://localhost:8080/product/${id}`)

        getProducts();
    };

    const login = (user) => {
        const userInDb = users.find(
            (userInDB) => userInDB.email === user.email
        );
        if (userInDb) {
            setUserR( () => {
                if (userInDb.name === user.password) {
                    navigate("/HappyWeb")
                    setLoginUser(true)
                    return {userInDb}
                }
                else {
                    setLoginUser(false)
                    return {};
                }

            })
        }

        else setLoginUser(true)

    }

    const createUserPost= async(user) => {
        setLoginUser(false)
        const { email, lastName, name, password,phone } = user;
        await axios.post("http://localhost:8080/client", { email ,lastName , name, password:password , phone:phone });}

    const getUser = async () => {
        await axios
            .get("http://localhost:8080/client")
            .then(({ data }) => setUsers(data.data));
    };


    return (
        <CartContext.Provider
            value={{createUserPost,setUserR,login,setLoginUser, products,userR,loginUser,addProduct,editProduct,delateProduct}}>
            {children}
        </CartContext.Provider>
    );
};