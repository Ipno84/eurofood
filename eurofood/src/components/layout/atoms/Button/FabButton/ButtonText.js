import styled from 'styled-components/native';

const ButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.black(1)};
    background-color: ${({ theme }) => theme.colors.white(1)};
    font-size: 32px;
    line-height: 56px;
    text-align: center;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    shadow-color: ${({ theme }) => theme.colors.alterGray(1)};
    shadow-offset: 0 0;
    shadow-opacity: 1;
    shadow-radius: 6px;
    elevation: 5;
`;

export default ButtonText;
