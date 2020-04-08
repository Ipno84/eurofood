import styled, { css } from 'styled-components/native';

const Right = styled.View`
    justify-content: center;
    padding-left: 8px;
    padding-right: 8px;
    flex: 1;
    ${({ center }) =>
        center &&
        css`
            align-items: center;
        `}
`;

export default Right;
