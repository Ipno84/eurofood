import styled from 'styled-components/native';

const ItemText = styled.Text`
    color: ${({ theme }) => theme.colors.dark(1)};
    font-size: 18px;
    flex: 1;
`;

export default ItemText;
