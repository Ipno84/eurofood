import styled from 'styled-components/native';

const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    font-size: 22px;
    line-height: 22px;
    text-transform: uppercase;
`;

export default Name;
