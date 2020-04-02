import styled, { css } from 'styled-components/native';

const InfoText = styled.Text`
    font-size: 16px;
    ${({ bold }) =>
        bold
            ? css`
                  font-family: ${({ theme }) => theme.fonts.roboto(700)};
              `
            : css`
                  font-family: ${({ theme }) => theme.fonts.roboto(400)};
              `}
`;

export default InfoText;
