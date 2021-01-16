import styled, { css } from 'styled-components/native';

import Wrapper from './../../Card/Wrapper';

const AddressItemWrapper = styled(Wrapper)`
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 8px;
    margin-bottom: 8px;
    border-width: 4px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 12px;
    ${({ isSelected }) =>
        isSelected
            ? css`
                  border-color: ${({ theme }) => theme.colors.orange(1)};
              `
            : css`
                  border-color: ${({ theme }) => theme.colors.white(1)};
              `}
`;

export default AddressItemWrapper;
