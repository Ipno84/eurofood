import Input from './';
import styled from 'styled-components/native';

const CardInput = styled(Input)`
    background-color: ${({ theme }) => theme.colors.lightGray(1)};
    color: ${({ theme }) => theme.colors.dark(1)};
    font-family: ${({ theme }) => theme.fonts.roboto(400, false, true)};
    font-size: 16px;
    line-height: 16px;
    border-width: 1px;
    padding-top: 7px;
    padding-bottom: 5px;
    padding-left: 6px;
    padding-right: 6px;
    border-color: ${({ theme }) => theme.colors.alterGray(1)};
    margin-top: 16px;
    margin-right: 16px;
    margin-left: 16px;
    flex: 1;
`;

export default CardInput;
