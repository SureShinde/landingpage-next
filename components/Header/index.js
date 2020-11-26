import React from "react";
import Navbar from "../Navbar/index"
const Header = ({ scroll }) => {
    return (
        <header>
            <Navbar scroll={scroll} />
        </header>
    )
}

export default Header;