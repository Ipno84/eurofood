import styled from 'styled-components/native';

const Card = styled.View`
    background-color: ${({ theme }) => theme.colors.white(1)};
    shadow-color: ${({ theme }) => theme.colors.alterGray(1)};
    shadow-offset: 0 0;
    shadow-opacity: 1;
    shadow-radius: 6px;
    elevation: 5;
    border-radius: 8px;
    flex-direction: column;
`;

export default Card;
