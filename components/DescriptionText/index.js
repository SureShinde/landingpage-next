import React from "react"
import styled from "styled-components";

const Description = styled.p`
    font-size : ${props => props.fontSize ? props.fontSize : "1"}rem;
    color : ${props => props.color ? props.color : "#fff"};
    font-family : "OpenSans-Regular";
    text-align : ${({ align }) => align ? align : "center"};
    line-height : ${({ lineHeight }) => lineHeight ? lineHeight + "px" : "normal"};
    width : ${props => props.width ? props.width + "%" : "auto"};
    margin : ${props => props.margin ? props.margin : "0 auto"};
    /* align-self : flex-end; */
`

export default Description;