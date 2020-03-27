import styled, { css } from 'styled-components/native';

const CheckboxLabel = styled.Text`
    flex: 1;
    ${({ isLink }) =>
        isLink &&
        css`
            color: ${({ theme }) => theme.colors.orange(1)};
            text-decoration: underline;
        `}
`;

export default CheckboxLabel;
