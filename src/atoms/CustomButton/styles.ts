import { styled } from "styled-components";

export const Button = styled.button<{color: string, hasborder: boolean, height?: string}>`
    width: 100%;
    background-color: ${({ color }) => color};
    height: ${({ height }) => height ? height : "2.5rem"};
    border: 0;
    border-radius: 0.9375rem;
    font-weight: 700;
    border: ${({ hasborder }) => hasborder ? "1px solid #1D1D1D" : "border: 1px solid #2D60FF"};
    color: ${({ hasborder }) => hasborder ? "#000000" : "#FFFFFF"};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.img`
    width: 1.25rem;
    height: 0.9375rem;
    margin-right: 0.5rem;
`