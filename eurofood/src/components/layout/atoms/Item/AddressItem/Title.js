import styled from 'styled-components/native';

const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    font-size: 24px;
    margin-bottom: 8px;
`;

export default Title;
