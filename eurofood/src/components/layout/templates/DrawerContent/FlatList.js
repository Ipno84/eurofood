import styled from 'styled-components/native';

const FlatList = styled.FlatList`
    flex: 1;
    border-color: ${({ theme }) => theme.colors.alterGray(0.6)};
    border-width: 1px;
`;

export default FlatList;
