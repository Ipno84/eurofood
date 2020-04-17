import styled from 'styled-components/native';

const Line = styled.View`
    border-top-width: 1px;
    padding-bottom: 12px;
    border-top-color: ${({ theme }) => theme.colors.alterGray(0.6)};
`;

export default Line;
