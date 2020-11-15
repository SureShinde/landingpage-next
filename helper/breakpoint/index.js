import { css } from "styled-components"
// example of mixins for in applied in styled components

const breakpoints = {
    xs: '280px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1400px'
};

export const breakpoint = Object.keys(breakpoints).reduce(
    (accumulator, label) => {
        accumulator[label] = (...args) => css`
            @media (min-width : ${breakpoints[label]}){
                ${
                    css(...args)
                }
            }
        `;
        return accumulator;
    },
{}
);