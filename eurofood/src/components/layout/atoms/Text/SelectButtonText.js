import styled, { css } from 'styled-components/native';

const SelectButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.dark(1)};
    font-family: ${({ theme }) => theme.fonts.roboto(400, false, true)};
    font-size: 16px;
    line-height: 16px;
    flex: 1;
    ${({ isSelected }) =>
        isSelected
            ? css`
                  color: ${({ theme }) => theme.colors.dark(1)};
              `
            : css`
                  color: ${({ theme }) => theme.colors.dark(0.5)};
              `}
`;

export default SelectButtonText;
