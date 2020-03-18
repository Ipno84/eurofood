import styled, { css } from 'styled-components/native';

const Spacer = styled.View`
    ${({ top }) =>
        top &&
        css`
            margin-top: ${top}px;
        `}
    ${({ right }) =>
        right &&
        css`
            margin-top: ${right}px;
        `}
    ${({ bottom }) =>
        bottom &&
        css`
            margin-top: ${bottom}px;
        `}
    ${({ left }) =>
        left &&
        css`
            margin-top: ${left}px;
        `}
`;

export default Spacer;
