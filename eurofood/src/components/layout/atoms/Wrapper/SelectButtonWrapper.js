import styled from 'styled-components/native';

const SelectButtonWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.lightGray(1)};
    border-width: 1px;
    padding-top: 12px;
    padding-bottom: 9px;
    padding-left: 6px;
    padding-right: 6px;
    border-color: ${({ theme }) => theme.colors.alterGray(1)};
    margin-top: 16px;
    margin-right: 16px;
    margin-left: 16px;
    flex: 1;
    flex-direction: row;
    position: relative;
    z-index: 1;
`;

export default SelectButtonWrapper;
