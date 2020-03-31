import styled, { css } from 'styled-components/native';

const Text = styled.Text`
    ${({ gray }) =>
        gray &&
        css`
            color: ${({ theme }) => theme.colors.alterGray(1)};
        `}
`;

export default Text;
