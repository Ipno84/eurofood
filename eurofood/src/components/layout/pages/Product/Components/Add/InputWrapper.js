import styled from 'styled-components/native';

const InputWrapper = styled.View`
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.alterGray(1)};
    border-radius: 5px;
    flex: 1;
    flex-direction: row;
    overflow: hidden;
`;

export default InputWrapper;
