import styled from 'styled-components/native';

const CategorySelector = styled.TouchableOpacity`
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.orange(1)};
    background-color: ${({ theme }) => theme.colors.white(1)};
    height: 48px;
    align-items: center;
    justify-content: center;
    padding-left: 16px;
    flex-direction: row;
    width: 130px;
`;

export default CategorySelector;
