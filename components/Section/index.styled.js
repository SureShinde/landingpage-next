import styled, {css} from "styled-components";
import { breakpoint } from "../../helper/breakpoint/";
import { colors } from "../../theme/index";

// polygon(0 0, 100% 0, 100% 62%, 51% 100%, 51% 100%, 0 63%) clip path section
const Section = styled.section`
    padding : 0 10px;
    min-height : 500px;
    clip-path: ${props => props.clipPath};   
    background-color : ${props => props.color};
    position : relative;
`;

export default Section;