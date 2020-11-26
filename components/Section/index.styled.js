import styled from "styled-components";
import { colors } from "../../theme/index";
const Section = styled.section`
    padding : 0 10px;
    min-height : ${props => props.height ? `${props.height}vh` : "auto"};
    clip-path: ${props => props.clipPath ? props.clipPath : "auto"};   
    background-color : ${props => props.color ? props.color : colors.whiteNormal};
    position : relative;
    background-image : url(${props => props.imgSrc});
    background-repeat : no-repeat;
    background-size : cover;
    margin : ${({ margin }) => margin};
    top: ${({ top }) => top ? top : "auto"};
    bottom: ${({ bottom }) => bottom ? bottom : "auto"};
    right: ${({ right }) => right ? right : "auto"};
    left: ${({ left }) => left ? left : "auto"};

`;

// ${props => props.imgUrl ? props.imgUrl : "none"}
export default Section;