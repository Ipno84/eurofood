import React from 'react';
import TotalsLabel from '../../atoms/Text/TotalsLabel';
import TotalsRow from '../../atoms/Item/TotalsRow';
import TotalsText from '../../atoms/Text/TotalsText';
import TotalsWrapper from '../../atoms/Wrapper/TotalsWrapper';
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
                <TotalsText>
                    {fixPrice(roundNumber(total_products), true, 2, true)} €
                </TotalsText>
            </TotalsRow>
            <TotalsRow>
                <TotalsLabel>Spedizione</TotalsLabel>
                <TotalsText>
                    {fixPrice(
                        roundNumber(total_shipping_tax_excl),
                        true,
                        2,
                        true
                    )}{' '}
                    €
                </TotalsText>
            </TotalsRow>
            <TotalsRow>
                <TotalsLabel>Tasse</TotalsLabel>
                <TotalsText>
                    {fixPrice(roundNumber(totalTaxes), true, 2, true)} €
                </TotalsText>
            </TotalsRow>
            <TotalsRow>
                <TotalsLabel bold={true}>Totale (Tasse escluse)</TotalsLabel>
                <TotalsText bold={true}>
                    {fixPrice(roundNumber(total_paid_tax_excl), true, 2, true)}{' '}
                    €
                </TotalsText>
            </TotalsRow>
            <TotalsRow>
                <TotalsLabel bold={true}>Totale (IVA incl.)</TotalsLabel>
                <TotalsText bold={true} red={true}>
                    {fixPrice(roundNumber(total_paid_tax_incl), true, 2, true)}{' '}
                    €
                </TotalsText>
            </TotalsRow>
        </TotalsWrapper>
    );
};

export default Totals;

/* acct_1GPrWYFcSj0xfSJi
pk_test_94TNPj0Fiwql8EwRqoHtkJma00hsXgD5QO */
