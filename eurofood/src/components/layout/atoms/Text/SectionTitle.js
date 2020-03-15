import styled from 'styled-components/native';

const SectionTitle = styled.Text`
    font-size: 28px;
    line-height: 28px;
    font-family: ${({ theme }) => theme.fonts.roboto(500, false, true)};
    text-transform: uppercase;
    padding-left: 20px;
    padding-right: 20px;
`;

export default SectionTitle;
