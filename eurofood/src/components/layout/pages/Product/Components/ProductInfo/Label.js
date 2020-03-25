import styled from 'styled-components/native';

const Label = styled.Text`
    width: 100px;
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, false)};
    font-size: 14px;
    line-height: 14px;
`;

export default Label;
