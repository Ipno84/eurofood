import styled from 'styled-components/native';

const PlainButton = styled.View`
    background-color: ${({ theme, disabled }) =>
        theme.colors.orange(disabled ? 0.6 : 1)};
`;

export default PlainButton;
