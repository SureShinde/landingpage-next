import React from "react"
import Container from "../Container/index";
import { Navbar } from "./index.styled";
import { colors } from "../../theme/index"
import { motion } from "framer-motion";
function NavbarComponent({ scroll }) {
    // const list = { hidden: { opacity: 0 } }
    // const item = {
    //     hidden: { x: -10, opacity: 0 }
    // }
    return (
        <React.Fragment>
            <Navbar bg={scroll > 0 ? colors.yellow : "none"}>
                <Container>
                    <ul>
                        <li>About</li>
                        <li>Work</li>
                        <li>Let's Talk</li>
                    </ul>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default NavbarComponent;