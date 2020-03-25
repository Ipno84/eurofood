import styled from 'styled-components/native';

const Label = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, false)};
    line-height: 40px;
    padding-right: 32px;
    padding-left: 16px;
`;

export default Label;
