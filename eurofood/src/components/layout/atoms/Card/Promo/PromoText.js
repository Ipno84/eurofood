import styled, { css } from 'styled-components/native';

const PromoText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    font-size: 22px;
    text-transform: uppercase;
    flex: 1;
    ${({ isWhite }) =>
        isWhite &&
        css`
            color: ${({ theme }) => theme.colors.white(1)};
        `}
`;

export default PromoText;
