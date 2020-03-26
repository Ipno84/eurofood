import styled from 'styled-components/native';

const AddToCartContainer = styled.View`
    background-color: ${({ theme, disabled }) =>
        theme.colors.darkRed(disabled ? 0.5 : 1)};
    align-items: center;
    border-radius: 4px;
    padding: 10px;
    margin-top: 16px;
`;

export default AddToCartContainer;
