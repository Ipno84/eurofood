import styled from 'styled-components/native';

const RegularPrice = styled.Text`
    font-size: 18px;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.gray(1)};
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    text-decoration: line-through;
    margin-right: 32px;
`;

export default RegularPrice;
