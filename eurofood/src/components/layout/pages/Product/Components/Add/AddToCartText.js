import styled from 'styled-components/native';

const AddToCartText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(500, false, false)};
    color: ${({ theme }) => theme.colors.white(1)};
    text-transform: uppercase;
    margin-left: 8px;
`;

export default AddToCartText;
