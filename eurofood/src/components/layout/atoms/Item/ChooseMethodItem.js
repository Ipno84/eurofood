import styled, { css } from 'styled-components/native';

const ChooseMethodItem = styled.View`
    ${({ isLast }) =>
        !isLast &&
        css`
            border-bottom-width: 1px;
            border-bottom-color: ${({ theme }) => theme.colors.lightGray(1)};
            border-style: solid;
        `}
`;

export default ChooseMethodItem;
