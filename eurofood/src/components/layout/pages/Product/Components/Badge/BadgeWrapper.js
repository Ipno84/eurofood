import styled, { css } from 'styled-components/native';

const BadgeWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.darkRed(1)};
    border-radius: 4px;
    align-self: flex-start;
    ${({ absolute }) =>
        absolute &&
        css`
            position: absolute;
            top: 16px;
            left: 16px;
        `};
`;

export default BadgeWrapper;
