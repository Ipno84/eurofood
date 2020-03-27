import CheckBox from '@react-native-community/checkbox';
import CheckboxWrapper from './CheckboxWrapper';
import React from 'react';
import { orange } from './../../../../../constants/ThemeConstants';

const Checkbox = ({ children, value, onChange }) => {
    return (
        <CheckboxWrapper>
            <CheckBox
                value={value}
                tintColors={{
                    true: orange.toString(),
                    false: orange.toString()
                }}
                onChange={e => onChange(e.nativeEvent.value)}
            />
            {children}
        </CheckboxWrapper>
    );
};

export default Checkbox;
