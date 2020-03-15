import styled from 'styled-components/native';

const SelectorPlaceholder = styled.Text`
    text-transform: uppercase;
    font-family: 'Roboto';
    font-weight: 300;
    color: ${({ theme }) => theme.colors.orange(1)};
    flex: 1;
    font-size: 14px;
    align-items: center;
    justify-content: center;
`;

export default SelectorPlaceholder;
