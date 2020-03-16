import styled from 'styled-components/native';

const FlatButton = styled.TouchableOpacity`
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.white(1)};
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 32px;
    padding-right: 28px;
    shadow-color: ${({ theme }) => theme.colors.alterGray(1)};
    shadow-offset: 0 0;
    shadow-opacity: 1;
    shadow-radius: 6px;
`;

export default FlatButton;
