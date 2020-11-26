import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
    font-size : ${props => props.fontSize}vw;
    color : ${props => props.color ? props.color : "#fff"};  
    position : ${props => props.position};
    font-family : ${({ fontFamily }) => !fontFamily ? "HouseSlant-Regular" : fontFamily};
    margin : ${props => props.margin ? props.margin : 0};
    text-align : ${({ align }) => align ? align : "center"};
`;


export default Heading;