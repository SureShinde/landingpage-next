import styled from "styled-components";
import { breakpoint } from "../../helper/breakpoint/index";
const Divider = styled.div`
    display : ${({ display }) => display ? display : "flex"};
    flex-direction : column;
    justify-content : center;
    margin-top : ${({ marginTop }) => marginTop ? marginTop + "px" : "auto"};
    ${breakpoint.md`
        position : ${props => props.position};
        right : ${props => props.right};
        bottom : ${props => props.bottom};
        top : ${props => props.top};
        left : ${props => props.left};
        width : ${props => props.width};
    `}

    ${breakpoint.sm`
        position : ${props => props.SmPosition};
        right : ${props => props.SmRight};
        bottom : ${props => props.SmBottom};
        top : ${props => props.SmTop};
        left : ${props => props.SmLeft};
        width : ${props => props.SmWidth};
    `}
`;

export default Divider;