import styled from 'styled-components/native';

const ModalWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.black(0.6)};
    width: 100%;
    height: 100%;
`;

export default ModalWrapper;
