import styled from 'styled-components/native';

const CurrentPrice = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    color: ${({ theme }) => theme.colors.red(1)};
    font-size: 24px;
    line-height: 24px;
`;

export default CurrentPrice;
