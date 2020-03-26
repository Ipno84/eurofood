import styled from 'styled-components/native';

const Wrapper = styled.View`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.darkRed(1)};
    border-radius: 3px;
    bottom: 0;
    right: 32px;
    align-self: flex-start;
    flex-direction: row;
`;

export default Wrapper;
