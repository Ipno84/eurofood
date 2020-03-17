import styled from 'styled-components/native';

const OldPrice = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    color: ${({ theme }) => theme.colors.gray(1)};
    font-size: 18px;
    line-height: 18px;
    margin-top: 2px;
    margin-left: 6px;
    text-decoration: line-through;
`;

export default OldPrice;
