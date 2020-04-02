import React, { useEffect, useState } from 'react';

import Text from './Text';
import getErrorMessageSelector from '../../../../../state/selectors/ErrorsSelectors/getErrorMessageSelector';
import { useSelector } from 'react-redux';

const ErrorMessage = ({ errorKey, scrollRef }) => {
    const [layout, setLayout] = useState(null);
    const errorMessage = useSelector(state =>
        getErrorMessageSelector(state, errorKey)
    );
    useEffect(() => {
        if (errorMessage && scrollRef && layout && layout.y) {
            scrollRef.current.scrollTo({ y: layout.y - 40 });
        }
    }, [errorMessage, layout, scrollRef]);
    if (!errorMessage) return null;
    return (
        <Text onLayout={e => setLayout(e.nativeEvent.layout)}>
            {errorMessage}
        </Text>
    );
};

export default ErrorMessage;
