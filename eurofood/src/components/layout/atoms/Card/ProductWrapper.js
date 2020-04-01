import styled, { css } from 'styled-components/native';

import Wrapper from './Wrapper';

const ProductWrapper = styled(Wrapper)`
    height: 210px;
    shadow-color: ${({ theme }) => theme.colors.alterGray(1)};
    shadow-offset: 0 0;
    shadow-opacity: 1;
    shadow-radius: 6px;
    elevation: 5;
    margin-bottom: 8px;
    ${({ inHorizontal }) =>
        inHorizontal &&
        css`
            width: 150px;
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
    ${({ isInRow }) =>
        isInRow &&
        css`
            margin-left: 4px;
            margin-right: 4px;
            flex: 1;
        `}
`;

export default ProductWrapper;
