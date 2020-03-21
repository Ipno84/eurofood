import styled from 'styled-components/native';

const ItemText = styled.Text`
    color: ${({ theme }) => theme.colors.dark(1)};
    background-color: ${({ theme }) => theme.colors.white(1)};
    font-size: 18px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.roboto(300, false, false)};
    padding: 16px;
`;

export default ItemText;
