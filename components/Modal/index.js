import React from "react";
import styled from "styled-components";
import { colors } from "../../theme";
import { Zoom } from "react-reveal";
const DefaultModal = styled.div`
    position : fixed;
    top : 50%;
    transform : translateY(-50%);
    right : 40%;
    height : 250px;
    width : 250px;
    max-height : 250px;
    max-width : 250px;
    background-color : ${colors.whiteNormal};
    color: ${colors.magentaMiddle}; 
    font-weight : "normal";
    font-family : "OpenSans-Regular";
    -webkit-box-shadow: 1px 12px 21px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 12px 21px -5px rgba(0,0,0,0.75);
    box-shadow: 1px 12px 21px -5px rgba(0,0,0,0.75);
    z-index : 10;
    padding : 25px;
`

const BackgroundModal = styled.div`
    z-index: -1;
    position: fixed;
    right: 0px;
    bottom: 0px;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
`

const Divider = styled.div`
    position: fixed;
    z-index: 1300;
    right: 0px;
    bottom: 0px;
    top: 0px;
    left: 0px;
`

const Modal = ({ message, children }) => {
    return (
        <Divider>
            <BackgroundModal />
            <DefaultModal>
                {children}
            </DefaultModal>
        </Divider>
    )
}

export default Modal;