import styled, { css } from "styled-components";
import { breakpoint } from "../../helper/breakpoint/";
import { animated } from "react-spring"
const Navbar = styled(animated.nav)`
    width: 100%;
    ${breakpoint.md`
        display : block;
    `}
    padding : 2rem;
    position : fixed;
    z-index : 5;
    ${({ bg }) => bg ? css`
        background-color : ${bg};
    ` : ""}
    ul{
        justify-content : flex-end;
        display : none;
        ${breakpoint.md`
            display : flex;  
        `}
        margin: 0px;
        li{
            flex-basis : 10%;  
            list-style-type : none;
            padding-left : none;
            font-family : "OpenSans-ExtraBold";
            color : #fff;
            font-size : 1rem;
            padding : 0;
            text-transform : uppercase;
        }  
    }
`
export { Navbar };