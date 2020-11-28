import styled from "styled-components";
import { colors } from "../../theme/index";

const Main = styled.main`
    background-color : ${({ backgroundColor }) => backgroundColor ? backgroundColor : colors.whiteNormal};    
`

export default Main;