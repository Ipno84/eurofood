import styled, { css } from 'styled-components/native';

const HorizontalScollerContainer = styled.View`
    ${({ plainBackground }) =>
        plainBackground &&
        css`
            background-color: ${({ theme }) => theme.colors.white(1)};
            margin-top: 20px;
            margin-bottom: 20px;
            padding-top: 16px;
            padding-bottom: 16px;
        `}
    ${({ shadow }) =>
        shadow &&
        css`
            shadow-color: ${({ theme }) => theme.colors.alterGray(1)};
            shadow-offset: 0 0;
            shadow-opacity: 1;
            shadow-radius: 6px;
        `}
`;

export default HorizontalScollerContainer;
