import React from "react";
import Section from "./index.styled";

const SectionComponent = ({ children }) => {
    return (
        <Section>
            {children}
        </Section>
    )
}

export default SectionComponent