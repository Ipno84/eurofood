import styled from 'styled-components/native';

const Text = styled.Text`
    padding-left: 16px;
    padding-right: 16px;
    color: ${({ theme }) => theme.colors.darkRed(1)};
`;

export default Text;
