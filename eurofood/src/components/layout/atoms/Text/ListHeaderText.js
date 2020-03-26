import styled, { css } from 'styled-components/native';

const ListHeaderText = styled.Text`
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.dark(1)};
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    font-size: 28px;
    line-height: 28px;
    padding-top: 16px;
    padding-right: 24px;
    padding-bottom: 8px;
    padding-left: 24px;
    ${({ center }) =>
        center &&
        css`
            text-align: center;
        `}
`;

export default ListHeaderText;
