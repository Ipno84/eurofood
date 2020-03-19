import styled, { css } from 'styled-components/native';

const FullScreen = styled.View`
    width: 100%;
    height: 100%;
    ${({ center }) =>
        center &&
        css`
            align-items: center;
            justify-content: center;
        `}
`;

export default FullScreen;
