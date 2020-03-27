import styled from 'styled-components/native';

const IconWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.orange(1)};
    right: 16px;
    position: relative;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
`;

export default IconWrapper;
