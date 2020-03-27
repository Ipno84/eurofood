import styled from 'styled-components/native';

const Separator = styled.View`
    height: 1px;
    background-color: ${({ theme }) => theme.colors.alterGray(0.3)};
    margin-left: 32px;
`;

export default Separator;
