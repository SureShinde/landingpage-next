import React from "react";
import styled from "styled-components";

const Input = styled.input`
    padding : ${({ padding }) => padding};
    font-family : ${({ fontFamily }) => fontFamily};
    
`

const InputComponent = ({ padding, fontFamily }) => {
    return (
        <Input
            padding={padding}
            fontFamily={fontFamily}
        />
    )
}

export default InputComponent;