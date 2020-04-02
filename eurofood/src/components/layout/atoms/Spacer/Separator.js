import styled from 'styled-components/native';

const Separator = styled.View`
    background-color: ${({ theme }) => theme.colors.lightGray(1)};
    height: 1px;
`;

export default Separator;
