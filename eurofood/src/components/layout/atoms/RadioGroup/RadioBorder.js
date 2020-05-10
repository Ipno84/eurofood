import styled from 'styled-components/native';

const RadioBorder = styled.View`
    width: 20px;
    height: 20px;
    border-width: 2px;
    border-radius: 20px;
    border-color: ${({ theme }) => theme.colors.orange(1)};
    align-items: center;
    justify-content: center;
`;

export default RadioBorder;
