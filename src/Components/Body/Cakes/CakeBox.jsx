import {CakeContainer} from "./CakesStyles";

export function CakeBox(props) {
    return (
        <>
        <CakeContainer>
            <h2>{props.nameCake}</h2>
            <img src={props.imgs}/>
            <div className="text">{props.texts}</div>
            <h3>{props.price}</h3>
        </CakeContainer>

        </>
    )
}