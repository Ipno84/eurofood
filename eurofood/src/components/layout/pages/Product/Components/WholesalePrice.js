import styled from 'styled-components/native';

const WholesalePrice = styled.Text`
    font-size: 26px;
    line-height: 26px;
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    color: ${({ theme }) => theme.colors.red(1)};
    margin-right: 8px;
`;

export default WholesalePrice;
