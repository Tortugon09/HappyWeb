import {Navbar} from "../Header/Navbar";
import {BodyUserDates} from "../Body/UserDates/BodyUserDates";
import {Footer} from "../Footer/Footer";


export function UserDates() {
    return (
        <>
            <Navbar></Navbar>
            <BodyUserDates></BodyUserDates>
            <Footer></Footer>
        </>
    )
}