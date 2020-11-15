import React from "react";
import styled, { ThemeProvider } from "styled-components";

const Button = styled.button`
    font-size : 1rem;
    margin : 1em;
    padding : 0.25em 1em;
    border-radius : 3px;
    color: ${props => props.theme.main};
    border: 2px solid ${props => props.theme.main};
`;

Button.defaultProps = {
    theme : {
        main : "palevioletred"
    }
}
const theme = {
    main : "mediumseagreen"
}

function ButtonComponent({themeName, text}){
    return (
       <ThemeProvider theme={!themeName ? theme : themeName}>
        <Button>{text}</Button>
      </ThemeProvider>
    )
}

export default ButtonComponent;