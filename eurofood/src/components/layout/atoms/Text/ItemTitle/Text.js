import styled from 'styled-components/native';

const Text = styled.Text`
    text-transform: lowercase;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.roboto(400, false, true)};
    margin-top: 5px;
`;

export default Text;
