import styled, { css } from 'styled-components/native';

import Wrapper from './Wrapper';

const ProductWrapper = styled(Wrapper)`
    height: 220px;
    elevation: 5;
    margin-bottom: 8px;
    ${({ inHorizontal }) =>
        inHorizontal &&
        css`
            width: 180px;
            height: 210px;
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
