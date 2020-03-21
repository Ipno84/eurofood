import styled, { css } from 'styled-components/native';

const ListStickyHeader = styled.View`
    height: 60px;
    background-color: ${({ theme }) => theme.colors.white(1)};
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.alterGray(0.4)};
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

export default ListStickyHeader;
