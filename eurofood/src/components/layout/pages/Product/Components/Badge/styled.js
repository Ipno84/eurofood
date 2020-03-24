import styled from 'styled-components/native';

const Badge = styled.Text`
    color: ${({ theme }) => theme.colors.white(1)};
    font-family: ${({ theme }) => theme.fonts.roboto(500)};
    padding-top: 5px;
    padding-bottom: 2px;
    padding-left: 4px;
    padding-right: 4px;
    font-size: 14px;
    line-height: 14px;
`;

export default Badge;
