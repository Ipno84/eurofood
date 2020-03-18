import styled from 'styled-components/native';

const Text = styled.Text`
    background-color: ${({ theme }) => theme.colors.darkOrange(1)};
    color: ${({ theme }) => theme.colors.white(1)};
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    font-size: 18px;
    line-height: 18px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
`;

export default Text;
