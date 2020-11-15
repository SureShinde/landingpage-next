import styled from "styled-components";


const Navbar = styled.nav`
    width: 100%;
    background-color : #f7c300;
    display : none;
    ul{
        display : flex;
        justify-content : flex-end;
        li{
            flex-basis : 6%;  
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