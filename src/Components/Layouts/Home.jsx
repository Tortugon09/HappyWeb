import {Navbar} from "../Header/Navbar";
import {BodyHome} from "../Body/Home/BodyHome";
import {Footer} from "../Footer/Footer";

export function Home() {
    return (
        <>
            <Navbar></Navbar>
            <BodyHome></BodyHome>
            <Footer></Footer>
        </>
    )
}