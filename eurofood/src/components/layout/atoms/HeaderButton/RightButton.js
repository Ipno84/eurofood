import CartButton from './CartButton';
import LoginButton from './LoginButton';
import React from 'react';
import isUserLoggedInSelector from './../../../../state/selectors/ClientSelectors/isUserLoggedInSelector';
import { useSelector } from 'react-redux';

const RightButton = () => {
    const isUserLoggedIn = useSelector(state => isUserLoggedInSelector(state));
    if (!isUserLoggedIn) return <LoginButton />;
    return <CartButton />;
};

export default RightButton;
