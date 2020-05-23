import styled, { css } from 'styled-components/native';

import React from 'react';
import fixPrice from '../../../../helpers/fixPrice';
import getCartTotalsSelector from '../../../../state/selectors/CartSelectors/getCartTotalsSelector';
import roundNumber from '../../../../helpers/roundNumber';
import { useSelector } from 'react-redux';

const Totals = () => {
    const {
        total_products,
        total_paid_tax_excl,
        total_paid_tax_incl,
        total_shipping_tax_excl,
        totalTaxes
    } = useSelector(state => getCartTotalsSelector(state));
    return (
        <TotalsWrapper>
            <TotalsRow>
                <TotalsLabel>Totale parziale</TotalsLabel>
                <TotalsValue>
                    {fixPrice(roundNumber(total_products), true, 2, true)} €
                </TotalsValue>
            </TotalsRow>
            <TotalsRow>
                <TotalsLabel>Spedizione</TotalsLabel>
                <TotalsValue>
                    {fixPrice(
                        roundNumber(total_shipping_tax_excl),
                        true,
                        2,
                        true
                    )}{' '}
                    €
                </TotalsValue>
            </TotalsRow>
            <TotalsRow>
                <TotalsLabel>Tasse</TotalsLabel>
                <TotalsValue>
                    {fixPrice(roundNumber(totalTaxes), true, 2, true)} €
                </TotalsValue>
            </TotalsRow>
            <TotalsRow>
                <TotalsLabel bold={true}>Totale (Tasse escluse)</TotalsLabel>
                <TotalsValue bold={true}>
                    {fixPrice(roundNumber(total_paid_tax_excl), true, 2, true)}{' '}
                    €
                </TotalsValue>
            </TotalsRow>
            <TotalsRow>
                <TotalsLabel bold={true}>Totale (IVA incl.)</TotalsLabel>
                <TotalsValue bold={true} red={true}>
                    {fixPrice(roundNumber(total_paid_tax_incl), true, 2, true)}{' '}
                    €
                </TotalsValue>
            </TotalsRow>
        </TotalsWrapper>
    );
};

export default Totals;

const TotalsWrapper = styled.View`
    padding: 16px;
`;
const TotalsRow = styled.View`
    flex-direction: row;
    padding: 8px;
`;
const TotalsText = styled.Text`
    ${({ red }) =>
        red
            ? css`
                  color: ${({ theme }) => theme.colors.red(1)};
              `
            : css`
                  color: ${({ theme }) => theme.colors.dark(1)};
              `}
    ${({ bold }) =>
        bold &&
        css`
            font-size: 16px;
            font-weight: 700;
        `};
`;
const TotalsLabel = styled(TotalsText)`
    flex: 1;
`;
const TotalsValue = styled(TotalsText)``;

/* acct_1GPrWYFcSj0xfSJi
pk_test_94TNPj0Fiwql8EwRqoHtkJma00hsXgD5QO */
