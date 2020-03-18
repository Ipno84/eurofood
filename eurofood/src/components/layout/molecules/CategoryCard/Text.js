import styled from 'styled-components/native';

const Text = styled.Text`
    color: ${({ theme }) => theme.colors.dark(1)};
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    text-align: center;
    padding-left: 4px;
    padding-right: 4px;
    padding-bottom: 4px;
`;

export default Text;
