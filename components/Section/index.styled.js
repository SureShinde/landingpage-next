import styled from "styled-components";
import { breakpoint } from "../../helper/breakpoint/";
import { colors } from "../../theme/index";

const Section = styled.section`
    padding : 0 10px;
    min-height : 500px;
    clip-path: polygon(0 0, 100% 0, 100% 62%, 51% 100%, 51% 100%, 0 63%);   
    background-color : red;
    ${breakpoint.md`
        background-color : ${colors.blueEggSalt};
    `}
`;

export default Section;