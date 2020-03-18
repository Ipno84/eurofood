import styled from 'styled-components/native';

const PromoTouchable = styled.View`
    background-color: ${({ theme }) => theme.colors.darkRed(1)};
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: 16px;
    margin-right: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 32px;
    padding-right: 32px;
    border-radius: 4px;
`;

export default PromoTouchable;
