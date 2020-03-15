import styled from 'styled-components/native';

const SectionTitle = styled.Text`
    font-size: 20px;
    line-height: 20px;
    font-family: ${({ theme }) => theme.fonts.roboto(500, false, true)};
    color: ${({ theme }) => theme.colors.dark(1)};
    text-transform: uppercase;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;
`;

export default SectionTitle;
