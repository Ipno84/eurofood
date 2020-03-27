import Bar from './Bar';
import React from 'react';
import Text from './Text';
import getUserFirstnameSelector from './../../../../state/selectors/ClientSelectors/getUserFirstnameSelector';
import getUserLastnameSelector from './../../../../state/selectors/ClientSelectors/getUserLastnameSelector';
import { useSelector } from 'react-redux';

const Header = () => {
    const firstname = useSelector(state => getUserFirstnameSelector(state));
    const lastname = useSelector(state => getUserLastnameSelector(state));
    return (
        <Bar>
            <Text>
                Ciao{' '}
                {firstname && lastname
                    ? [firstname, lastname].join(' ')
                    : 'ospite'}
            </Text>
        </Bar>
    );
};

export default Header;
