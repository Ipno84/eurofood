import styled from 'styled-components/native';

const PlainButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.orange(1)};
`;

export default PlainButton;
