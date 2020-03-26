import {
    facebookColor,
    twitterColor
} from './../../../../../../constants/ThemeConstants';

import ButtonWrapper from './ButtonWrapper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Item from './Item';
import React from 'react';
import Text from './Text';
import Touchable from './../../../../atoms/Button/Touchable';
import Wrapper from './Wrapper';

const Share = ({ id }) => {
    return (
        <Wrapper>
            <Item>
                <Touchable>
                    <ButtonWrapper>
                        <Icon
                            name="facebook"
                            color={facebookColor.toString()}
                            size={20}
                        />
                        <Text>Condividi</Text>
                    </ButtonWrapper>
                </Touchable>
            </Item>
            <Item>
                <Touchable>
                    <ButtonWrapper>
                        <Icon
                            name="twitter"
                            color={twitterColor.toString()}
                            size={22}
                        />
                        <Text>Twitta</Text>
                    </ButtonWrapper>
                </Touchable>
            </Item>
        </Wrapper>
    );
};

export default Share;
