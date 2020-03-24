import styled from 'styled-components/native';

const Italic = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(700, true, false)};
    font-size: 12px;
    line-height: 12px;
    color: ${({ theme }) => theme.colors.gray(1)};
    padding-left: 16px;
`;

export default Italic;
