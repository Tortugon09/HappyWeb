import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginControl} from "./Layouts/LoginControl";

export function ControlPanel() {
    return (
        <>
            <LoginControl></LoginControl>
        </>
    )
}