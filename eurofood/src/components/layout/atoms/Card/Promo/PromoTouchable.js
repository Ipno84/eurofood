import styled from 'styled-components/native';

const PromoTouchable = styled.View`
    background-color: ${({ theme }) => theme.colors.darkRed(1)};
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: 16px;
    margin-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 4px;
`;

export default PromoTouchable;
