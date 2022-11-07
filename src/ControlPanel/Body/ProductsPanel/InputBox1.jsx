import {useState} from "react";
import {InputStyled} from "./BodyProductsStyles.jsx";

export function InputBox1(props,) {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <>
            <div className="box-form">
                <label className={`${clicked ? "active" : ""}`} htmlFor={props.htmlFor}>{props.label}</label>
                <InputStyled clicked={clicked} handleClick={handleClick} onClick={handleClick} onBlur={handleClick}
                             type={props.type} id={props.id} required={true} autoComplete="off"></InputStyled>
            </div>
        </>
    )
}