import styled from 'styled-components/native';

const ButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.gray(1)};
    font-family: ${({ theme }) => theme.fonts.roboto(700)};
    font-size: 16px;
`;

export default ButtonText;
