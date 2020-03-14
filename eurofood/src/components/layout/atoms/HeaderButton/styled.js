import styled, { css } from 'styled-components/native';

const HeaderButton = styled.TouchableOpacity`
    ${({ isLeft }) =>
        isLeft
            ? css`
                  margin-left: 16px;
              `
            : css`
                  margin-right: 16px;
              `}
`;

export default HeaderButton;
