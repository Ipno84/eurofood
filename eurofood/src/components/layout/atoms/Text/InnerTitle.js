import styled from 'styled-components/native';

const InnerTitle = styled.Text`
    font-size: 24px;
    line-height: 24px;
    font-family: ${({ theme }) => theme.fonts.roboto(400, false, true)};
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
`;

export default InnerTitle;
