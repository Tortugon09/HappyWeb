





export function AddressDates({data}) {
    const {id,state,city,street,houseNumber,zipCode,clienId} =data
    console.log(data)
    return(
        <>
            <h4>Estado: <span>{state}</span></h4>
            <h4>Ciudad: <span>{city}</span></h4>
            <h4>Calle: <span>{street}</span></h4>
            <h4>Numero de casa: <span>{houseNumber}</span></h4>
            <h4>Codigo Postal: <span>{zipCode}</span></h4>
        </>
    )
}