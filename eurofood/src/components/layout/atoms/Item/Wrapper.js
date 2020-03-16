import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity`
    width: 75px;
    height: 115px;
    background-color: ${({ theme }) => theme.colors.white(1)};
    margin-left: 16px;
`;

export default Wrapper;
