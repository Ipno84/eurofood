import styled, { css } from 'styled-components/native';

import Wrapper from './../../../atoms/Card/Wrapper';

const CartRowWrapper = styled(Wrapper)`
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 8px;
    margin-top: 8px;
    padding: 16px;
    flex-direction: row;
    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
        `}
`;

export default CartRowWrapper;
