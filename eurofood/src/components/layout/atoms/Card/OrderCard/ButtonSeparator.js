import styled from 'styled-components/native';

const ButtonSeparator = styled.View`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.dark(0.1)};
    left: 50%;
`;

export default ButtonSeparator;
