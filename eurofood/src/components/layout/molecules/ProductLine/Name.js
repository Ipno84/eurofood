import styled from 'styled-components/native';

const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    font-size: 24px;
    line-height: 24px;
    text-transform: uppercase;
`;

export default Name;
