import styled from 'styled-components/native';

const SectionTitle = styled.Text`
    font-size: 20px;
    line-height: 20px;
    font-family: ${({ theme }) => theme.fonts.roboto(700, false, true)};
    color: ${({ theme }) => theme.colors.dark(1)};
    text-transform: uppercase;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    margin-bottom: -12px;
`;

export default SectionTitle;
