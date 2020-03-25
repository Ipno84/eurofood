import styled from 'styled-components/native';

const AddToCartContainer = styled.View`
    background-color: ${({ theme }) => theme.colors.darkRed(1)};
    align-items: center;
    border-radius: 4px;
    padding: 10px;
    margin-top: 16px;
`;

export default AddToCartContainer;
