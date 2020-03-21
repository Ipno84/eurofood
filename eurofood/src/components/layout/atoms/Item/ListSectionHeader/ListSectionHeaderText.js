import styled from 'styled-components/native';

const ListHeaderText = styled.Text`
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.roboto(100, false, false)};
`;

export default ListHeaderText;
