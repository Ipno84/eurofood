import React from 'react';
import Text from './Text';
import getErrorMessageSelector from '../../../../../state/selectors/ErrorsSelectors/getErrorMessageSelector';
import { useSelector } from 'react-redux';

const ErrorMessage = ({ errorKey }) => {
    const errorMessage = useSelector(state =>
        getErrorMessageSelector(state, errorKey)
    );
    if (!errorMessage) return null;
    return <Text>{errorMessage}</Text>;
};

export default ErrorMessage;
