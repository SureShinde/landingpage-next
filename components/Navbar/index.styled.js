import styled from "styled-components";
import { breakpoint } from "../../helper/breakpoint/";
import { colors } from "../../theme/index";

const Navbar = styled.nav`
    width: 100%;
    display : none;
    ${breakpoint.md`
        display : block;
        background : ${colors.yellow}
    `}
    ul{
        display : flex;
        justify-content : flex-end;
        li{
            flex-basis : 10%;  
            list-style-type : none;
            padding-left : none;
            font-family : "OpenSans-ExtraBold";
            color : #fff;
            font-size : 1rem;
            padding : 0;
        }  
    }
`
export { Navbar };