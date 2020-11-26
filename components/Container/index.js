import React from "react"
import Container from "./index.styled";
const ContainerComponent = ({ children }) => {
    return (
        <Container>
            { children}
        </Container>
    )
}

export default ContainerComponent