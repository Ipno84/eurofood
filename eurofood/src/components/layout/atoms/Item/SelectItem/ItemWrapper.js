import styled from 'styled-components/native';

const ItemWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.white(1)};
    padding: 16px;
    flex-direction: row;
`;

export default ItemWrapper;
