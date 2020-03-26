import styled from 'styled-components/native';

const Text = styled.Text`
    color: ${({ theme }) => theme.colors.white(1)};
    font-size: 12px;
    line-height: 12px;
    padding-top: 4px;
    padding-bottom: 1px;
    padding-left: 4px;
    padding-right: 4.5px;
    font-family: ${({ theme }) => theme.fonts.roboto(300, false, false)};
`;

export default Text;
