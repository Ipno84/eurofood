import styled, { css } from 'styled-components/native';

const ButtonWrapper = styled.View`
    width: 36px;
    align-items: center;
    justify-content: center;
    border-color: ${({ theme }) => theme.colors.alterGray(1)};
    background-color: ${({ theme }) => theme.colors.lightGray(1)};
    ${({ isLeft }) =>
        isLeft
            ? css`
                  border-right-width: 1px;
              `
            : css`
                  border-left-width: 1px;
              `}
`;

export default ButtonWrapper;
