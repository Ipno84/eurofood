import styled from 'styled-components/native';

const OrderCardButtonsWrapper = styled.View`
    flex-direction: row;
    margin-top: 16px;
    border-top-width: 1px;
    border-top-color: ${({ theme }) => theme.colors.dark(0.1)};
    position: relative;
`;

export default OrderCardButtonsWrapper;
