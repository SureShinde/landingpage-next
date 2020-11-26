import React from "react"
import Container from "../Container/index";
import { Navbar } from "./index.styled";
import { useSpring } from "react-spring";
import { colors } from "../../theme/index"

function NavbarComponent({ scroll }) {
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