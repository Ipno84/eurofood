import styled, { css } from 'styled-components/native';

const IconWrapper = styled.View`
    align-items: center;
    justify-content: center;
    ${({ light }) =>
        light
            ? css`
                  height: 20px;
              `
            : css`
                  margin-right: -3px;
                  width: 40px;
              `}
`;

export default IconWrapper;
