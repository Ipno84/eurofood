import React, { useEffect, useState } from 'react';

import Text from './Text';
import { View } from 'react-native';
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
        <View style={{ minHeight: 20, paddingTop: 3 }}>
            <Text onLayout={e => setLayout(e.nativeEvent.layout)}>
                {errorMessage}
            </Text>
        </View>
    );
};

export default ErrorMessage;
