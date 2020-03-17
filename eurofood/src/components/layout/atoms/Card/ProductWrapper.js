import styled, { css } from 'styled-components/native';

import Wrapper from './Wrapper';

const ProductWrapper = styled(Wrapper)`
    height: 220px;
    ${({ inHorizontal }) =>
        inHorizontal &&
        css`
            width: 240px;
            height: 250px;
            ${({ isFirst }) =>
                isFirst
                    ? css`
                          margin-left: 16px;
                      `
                    : css`
                          margin-left: 8px;
                      `}
        `}
`;

export default ProductWrapper;
