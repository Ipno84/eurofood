import styled from 'styled-components/native';

const HorizontalScollerContainer = styled.View`
    background-color: ${({ theme }) => theme.colors.white(1)};
    shadow-color: ${({ theme }) => theme.colors.alterGray(1)};
    shadow-offset: 0 0;
    shadow-opacity: 1;
    shadow-radius: 6px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 16px;
    padding-bottom: 16px;
`;

export default HorizontalScollerContainer;
