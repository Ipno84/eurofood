import styled from 'styled-components/native';

const Text = styled.Text`
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gray(1)};
    font-family: ${({ theme }) => theme.fonts.roboto(400)};
    margin-left: 6px;
`;

export default Text;
