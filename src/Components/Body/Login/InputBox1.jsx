import {InputStyled} from "./LoginStyles.jsx";
import {useState} from "react";

export function InputBox1(props,{}) {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    const handleChange = () =>{
        const vaule = e => e.target.value
        const name = e => e.target.name
    }


    return (
        <>
            <div className="box-form">
                <label className={`${clicked ? "active" : ""}`} htmlFor={props.htmlFor}>{props.label}</label>
                <InputStyled onChange={() => handleChange(vaule,name)} clicked={clicked} handleClick={handleClick} onClick={handleClick} onBlur={handleClick}
                             type={props.type} id={props.id} required={true} autoComplete="off"></InputStyled>
            </div>
        </>
    )
}