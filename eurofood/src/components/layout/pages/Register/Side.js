import styled, { css } from 'styled-components/native';

const Side = styled.View`
    flex: 1;
    ${({ isRight }) =>
        isRight &&
        css`
            align-items: flex-end;
        `}
`;

export default Side;
