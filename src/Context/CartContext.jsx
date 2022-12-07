import {createContext, useState, useEffect, useReducer} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {useSelector} from "react-redux";


export const CartContext = createContext();


    export const CartProvider = ({ children }) => {


        const navigate = useNavigate();


        const [order,setOrder] =useState({
            shippingId: 0 ,
            billId: 0 ,
            statusOrderId: 0
        })
        const [token, setToken] = useState(() => {
            try {
                const ProductsInLocalStorage = localStorage.getItem('token')
                return ProductsInLocalStorage ? JSON.parse(ProductsInLocalStorage) : ""
            } catch (error) {
                return "";
            }
        })

    //STATES FOR THE PRODUCTS
    const [products, setProducts] = useState([]);
    //STATES FOR THE USERS

        //STATE FOR ALL USERS
    const [users, setUsers] = useState(
    )
        //STATE FOR THE USER IN SESION
    const [userR, setUserR] = useState(() => {
        try {
            const ProductsInLocalStorage = localStorage.getItem('LoginUserR')
            return ProductsInLocalStorage ? JSON.parse(ProductsInLocalStorage) : {}
        } catch (error) {
            return {};
        }
    })
        //STATE IF THE USER LOGIN IS TRUE?
    const [loginUser, setLoginUser] = useState(() => {
        try {
            const ProductsInLocalStorage = localStorage.getItem('LoginUser')
            return ProductsInLocalStorage ? JSON.parse(ProductsInLocalStorage) : false
        } catch (error) {
            return false;
        }
    })
    //STATES FOR THE ADDRESS
    const [address, setAddress] = useState([{}])
    //STATES FOR THE PAYMENTS
    const [payment,setPayment] = useState([{}])
        console.log(token)

        const instance = axios.create();
        instance.defaults.headers.common['Authorization'] = token;
        axios.defaults.headers.common['Authorization'] = token;


    //EJECUTE FOR THE REQUESTS

    useEffect(() =>{
        localStorage.setItem("LoginUser", JSON.stringify(loginUser))
    }, [loginUser]);

    useEffect(() =>{
        localStorage.setItem("LoginUserR", JSON.stringify(userR))
    }, [userR]);
        useEffect(() =>{
            localStorage.setItem("token", JSON.stringify(token))
        }, [token]);

    useEffect(() => {
        getProducts();
    }, []);



        const getPayment = async () => {
            const {id} = userR[0]
            await axios.get(`http://localhost:8080/payment/client/${id}`)
                .then(({ data }) => setPayment(data.data));
        }
        const getAddress = async () => {
            const {id} = userR[0]
            await axios.get(`http://localhost:8080/address/client/${id}`)
                .then(({ data }) => setAddress(data.data));
        }



        // REQUEST FOR THE PRODUCTS
        const getProducts = async () => {
            await axios
                .get("http://localhost:8080/product/list")
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
    const delateProduct = async (product) => {
        const { id } = product;
        await axios
            .delete(`http://localhost:8080/product/${id}`)

        getProducts();
    };

    // REQUEST FOR THE USERS
        const login = async (user) => {
            const {email, password} = user
            await axios
                .post("http://localhost:8080/login", {email,password})
                .then( async(response) => {
                    setToken(response.headers['authorization'])
                    await axios({
                        method: 'get',
                        url: `http://localhost:8080/client/findByEmail?email=${email}`,
                        headers: {'Authorization': `${response.headers['authorization']}`}
                    }).then(function (response) {
                        console.log(response.data.data)
                        setUserR(response.data.data);
                        setLoginUser(true)
                        navigate("/HappyWeb/HappyWeb")
                    }).catch(function (error) {
                        console.log(error);
                    });
                })
        }

        const getUser = async () => {
            await axios({
                method: 'get',
                url: `http://localhost:8080/client/findByEmail?email=${userR[0].email}`,
            }).then(function (response) {
                console.log(response.data.data)
                setUserR(response.data.data);
            }).catch(function (error) {
                console.log(error);
            });
        }


    const createUserPost= async(user) => {
            const { email, lastName, name, password,phone } = user;
            await axios.post("http://localhost:8080/client/register", { email ,lastName , name, password , phone });
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
    const addAddress = async(address) => {
        const {state, city, street, houseNumber, zipCode, clientId} = address;
        await axios.post("http://localhost:8080/address", {state, city, street, houseNumber, zipCode, clientId})
            .then(function (response) {
                getAddress()
            }).catch(function (error) {
                console.log(error);
            })

    }
    const putAddress = async (address) => {
        const {id, state, city, street, houseNumber, zipCode, clientId} = address
        await axios.put(`http://localhost:8080/address/${id}`, {state, city, street, houseNumber, zipCode, clientId})
            .then(function (response) {
                getAddress();
            }).catch(function (error) {
                console.log(error);
            })
    }
    const delateAddress = async(id) => {
        await axios.delete(`http://localhost:8080/address/${id}`)
            .then(function (response) {
                getAddress()
            }).catch(function (error) {
                console.log(error);
            })

    }

    //REQUEST FOR THE PAYMENTS
        const addPayment = async(payment) => {
            const {cardNumber,dateExpiry,cardHolder,cardIssuer,cvv,clientId} = payment;
            await axios.post("http://localhost:8080/payment", {cardNumber,dateExpiry,cardHolder,cardIssuer,cvv,clientId})
                .then(function (response) {
                    getPayment();
                }).catch(function (error) {
                    console.log(error);
                })

        }
        const putPayment = async (payment) => {
            const {id,cardNumber,dateExpiry,cardHolder,cardIssuer,cvv,clientId} = payment
            await axios.put(`http://localhost:8080/payment/${id}`, {id,cardNumber,dateExpiry,cardHolder,cardIssuer,cvv,clientId})
                .then(function (response) {
                    getPayment();
                }).catch(function (error) {
                    console.log(error);
                })
        }

        const delatePayment = async(id) => {
            await axios.delete(`http://localhost:8080/payment/${id}`)
                .then(function (response) {
                    getPayment();
                }).catch(function (error) {
                    console.log(error);
                })
        }


    //REQUEST FOR THE SHIPPING
        const addShipping = async(shipping, bill,statuss) => {
            const {dateExit,dateReceived} = shipping;
            var id = "d";
            await axios.post("http://localhost:8080/shipping", {dateExit,dateReceived})
                .then(function (response) {
                    console.log(response.data.data.id)
                        id = response.data.data.id;

            }).catch(function (error) {
                console.log(error);
            })
            addBill(bill,statuss,id);

        }
    //REQUEST FOR THE BILL
        const addBill = async(bill,statuss,shippingId) => {
            const {amount,iva,date} = bill;
            var id = "d";
            await axios.post("http://localhost:8080/bill", {amount,iva,date})
                .then(function (response) {
                    console.log(response.data.data.id)
                    id = response.data.data.id;

                }).catch(function (error) {
                    console.log(error);
                })
            addStatusOrder(statuss,shippingId,id)

        }
    //REQUEST FOR THE STATUSORDER
        const addStatusOrder = async(statuss,shippingId,billId) => {
            const {status,dateOrderReceived,dateOrderEnded} = statuss;
            var id = "d";
            await axios.post("http://localhost:8080/statusOrder", {status,dateOrderReceived,dateOrderEnded})
                .then(function (response) {
                    console.log(response.data.data.id)
                    id = response.data.data.id;

                }).catch(function (error) {
                    console.log(error);
                })
            addOrder(dateOrderReceived,shippingId,billId,id)
        }

        const addOrder = async(date,shippingId,billId,statusOrderId) => {
            console.log(shippingId)
            console.log(billId)
            console.log(statusOrderId)
            var id = "d";
            const clientId = userR.userInDb.id
            await axios.post("http://localhost:8080/order", {date,clientId, shippingId, billId, statusOrderId})
                .then(function (response) {
                    console.log(response.data.data.id)
                    id = response.data.data.id;
                }).catch(function (error) {
                    console.log(error);
                })
            addOrderPivot(id)
        }
        const state = useSelector((state) => state);
        const {db} = state.cart;



        const addOrderPivot = (orderId) => {
            db.map(async (posts) =>{
                const productId = posts.id
                await axios.post("http://localhost:8080/product-order", {productId,orderId})
                    .then(function (response) {
                        console.log(response.data.data.id)
                    }).catch(function (error) {
                        console.log(error);
                    })
            })
        }




    return (
        <CartContext.Provider
            value={{
                createUserPost,
                editUser,
                setUserR,
                login,
                setLoginUser,
                products,
                userR,
                loginUser,
                addProduct,
                editProduct,
                delateProduct,
                addAddress,
                address,
                delateAddress,
                payment,
                putAddress,
                addPayment,
                putPayment,
                delatePayment,
                addShipping,
                users,
                token,
                setToken

        }}>
            {children}
        </CartContext.Provider>
    );
};