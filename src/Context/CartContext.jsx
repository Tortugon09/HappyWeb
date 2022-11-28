import {createContext, useState, useEffect, useReducer} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useHref} from "react-router";
import {useNavigate} from "react-router-dom";

export const CartContext = createContext();


    export const CartProvider = ({ children }) => {
        const navigate = useNavigate();
    //STATES FOR THE PRODUCTS
    const [products, setProducts] = useState([]);

    //STATES FOR THE USERS

        //STATE FOR ALL USERS
    const [users, setUsers] = useState([])
        //STATE FOR THE USER IN SESION
    const [userR, setUserR] = useState(() => {
        try {
            const ProductsInLocalStorage = localStorage.getItem('LoginUserR')
            return ProductsInLocalStorage ? JSON.parse(ProductsInLocalStorage) : []
        } catch (error) {
            return [];
        }
    })
        //STATE IF THE USER LOGIN IS TRUE?
    const [loginUser, setLoginUser] = useState(() => {
        try {
            const ProductsInLocalStorage = localStorage.getItem('LoginUser')
            return ProductsInLocalStorage ? JSON.parse(ProductsInLocalStorage) : [true]
        } catch (error) {
            return [true];
        }
    })
    //STATES FOR THE ADDRESS
    const [address, setAddress] = useState([{}])



    //EJECUTE FOR THE REQUESTS

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

    useEffect(() => {
        getAddress()
    }, []);




        // REQUEST FOR THE PRODUCTS
        const getProducts = async () => {
            await axios
                .get("http://localhost:8080/product")
                .then(({ data }) => setProducts(data.data));


        };
        //POST PRODUCT
    const addProduct = async (product) => {
        const { description,name, quantity, price } = product;

        await axios.post("http://localhost:8080/product", { description ,name, price, quantity });

        getProducts();
    };

    const editProduct = async (product) => {
        const { id, description, name, quantity, price } = product;
        await axios
            .put(`http://localhost:8080/product/${id}`, { description , name, price, quantity });

        getProducts();
    };

    const getproductId = async (product) => {
        const { id } = product;
        await axios
            .get(`http://localhost:8080/product/${id}`)

        getProducts();
    };

    const delateProduct = async (product) => {
        const { id } = product;
        await axios
            .delete(`http://localhost:8080/product/${id}`)

        getProducts();
    };

    // REQUEST FOR THE USERS
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

    const getUser = async () => {
        await axios
            .get("http://localhost:8080/client")
            .then(({ data }) => setUsers(data.data));
    };

    const createUserPost= async(user) => {
            setLoginUser(false)
            const { email, lastName, name, password,phone } = user;
            await axios.post("http://localhost:8080/client", { email ,lastName , name, password:password , phone:phone });
            getUser();
            navigate("/HappyWeb/LogIn")
        }

    const editUser = async (user) => {
        const {id, email, lastName, name, password,phone } = user;
        console.log(lastName)
        await axios
            .put(`http://localhost:8080/client/${id}`, { email ,lastName , name, password:password , phone:phone });
        getUser();
        console.log(user)
        setUserR({userInDb: {id:id, email:email, lastName: lastName, name:name,password:password, phone:phone}})
    };

    //REQUEST FOR THE DIRECCIONS
    const getAddress = async () => {
        await axios.get("http://localhost:8080/address")
            .then(({ data }) => setAddress(data.data));
    }
    const addAddress = async(address) => {
        const {state, city, street, houseNumber, zipCode, clientId} = address;
        await axios.post("http://localhost:8080/address", {state, city, street, houseNumber, zipCode, clientId})
        getAddress();

    }
    const delateAddress = async(id) => {
        await axios.delete(`http://localhost:8080/address/${id}`)
        getAddress();
    }

    return (
        <CartContext.Provider
            value={{createUserPost,editUser,setUserR,login,setLoginUser, products,userR,loginUser,addProduct,editProduct,delateProduct,addAddress,address, delateAddress}}>
            {children}
        </CartContext.Provider>
    );
};