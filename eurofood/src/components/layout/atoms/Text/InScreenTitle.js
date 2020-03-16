import styled from 'styled-components/native';

const InScreenTitle = styled.Text`
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.roboto(400, false, true)};
    font-size: 22px;
    line-height: 22px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
`;

export default InScreenTitle;
