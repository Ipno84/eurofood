import styled, { css } from 'styled-components/native';

const HorizontalScollerContainer = styled.View`
    ${({ plainBackground }) =>
        plainBackground &&
        css`
            background-color: ${({ theme }) => theme.colors.white(1)};
            margin-bottom: 20px;
            padding-top: 16px;
            padding-bottom: 3px;
        `}
    ${({ shadow }) =>
        shadow &&
        css`
            shadow-color: ${({ theme }) => theme.colors.alterGray(1)};
            shadow-offset: 0 0;
            shadow-opacity: 1;
            shadow-radius: 6px;
            elevation: 5;
        `}
`;

export default HorizontalScollerContainer;
