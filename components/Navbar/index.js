import React from "react"
import Container from "../Container/index"
import { Navbar } from "./index.styled";
function NavbarComponent() {
    return (
        <React.Fragment>
            <Navbar>
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