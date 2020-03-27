import styled from 'styled-components/native';

const RadioSelection = styled.View`
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.orange(1)};
`;

export default RadioSelection;
