import React from "react";
import Section from "./index.styled";
const SectionComponent = ({ children, clipPath, color, height, imgSrc, margin, top, right, bottom, left, id }) => {
    return (
        <Section clipPath={clipPath} color={color} height={height} imgSrc={imgSrc} margin={margin} top={top} right={right} bottom={bottom} left={left} id={id}>
            { children}
        </Section >
    )
}

export default SectionComponent