import styled from 'styled-components/native';

const OrderCardButtonText = styled.Text`
    font-size: 16px;
    line-height: 20px;
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.orange(1)};
    height: 20px;
`;

export default OrderCardButtonText;
