import styled, { css } from 'styled-components/native';

const SelectorPlaceholderWrapper = styled.View`
    flex: 1;
    ${({ top }) =>
        top
            ? css`
                  padding-top: 8px;
              `
            : css`
                  padding-bottom: 8px;
              `}
`;

export default SelectorPlaceholderWrapper;
