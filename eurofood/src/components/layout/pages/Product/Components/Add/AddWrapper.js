import styled from 'styled-components/native';

const AddWrapper = styled.View`
    border-width: 1px;
    padding: 16px;
    margin-top: 0;
    margin-left: 16px;
    margin-bottom: 16px;
    margin-right: 16px;
    border-style: dashed;
    border-radius: 1px;
    border-color: ${({ theme }) => theme.colors.alterGray(1)};
`;

export default AddWrapper;
