import styled, { css } from 'styled-components/native';

const Label = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto()};
    margin-left: 8px;
    ${({ bold }) =>
        bold &&
        css`
            font-weight: 700;
        `}
    ${({ italic }) =>
        italic &&
        css`
            font-style: italic;
            margin-top: 8px;
        `}
`;

export default Label;
