import Input from './../../../../atoms/Input';
import styled from 'styled-components/native';

const InputNumber = styled(Input)`
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.roboto(700)};
    color: ${({ theme }) => theme.colors.gray(1)};
    line-height: 40px;
    padding: 0;
    flex: 1;
`;

export default InputNumber;
