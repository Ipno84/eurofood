import {
    facebookColor,
    instagramColor,
    twitterColor,
    whatsappColor
} from './../../../../../../constants/ThemeConstants';

import ButtonWrapper from './ButtonWrapper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Item from './Item';
import React from 'react';
import Share from 'react-native-share';
import Text from './Text';
import Touchable from './../../../../atoms/Button/Touchable';
import Wrapper from './Wrapper';
import getProductItemLinkSelector from '../../../../../../state/selectors/ProductsSelectors/getProductItemLinkSelector';
import getProductItemNameSelector from '../../../../../../state/selectors/ProductsSelectors/getProductItemNameSelector';
import useProductDefaultImage from '../../../../../../hooks/products/useProductDefaultImage';
import { useSelector } from 'react-redux';

const ProductShare = ({ id }) => {
    const productName = useSelector(state =>
        getProductItemNameSelector(state, id)
    );
    const productLink = useSelector(state =>
        getProductItemLinkSelector(state, id)
    );

    const shareOptions = {
        title: 'Share via',
        message: productName,
        url: productLink
    };
    return (
        <>
            <Wrapper>
                <Item>
                    <Touchable
                        onPress={() =>
                            Share.shareSingle({
                                ...shareOptions,
                                social: Share.Social.FACEBOOK
                            })
                        }>
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
                    <Touchable
                        onPress={() =>
                            Share.shareSingle({
                                ...shareOptions,
                                social: Share.Social.TWITTER
                            })
                        }>
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
            <Wrapper>
                <Item>
                    <Touchable
                        onPress={() =>
                            Share.shareSingle({
                                ...shareOptions,
                                social: Share.Social.WHATSAPP,
                                whatsAppNumber: ''
                            })
                        }>
                        <ButtonWrapper>
                            <Icon
                                name="whatsapp"
                                color={whatsappColor.toString()}
                                size={20}
                            />
                            <Text>Whatsapp</Text>
                        </ButtonWrapper>
                    </Touchable>
                </Item>
                <Item>
                    <Touchable
                        onPress={() =>
                            Share.shareSingle({
                                ...shareOptions,
                                social: Share.Social.INSTAGRAM
                            })
                        }>
                        <ButtonWrapper>
                            <Icon
                                name="instagram"
                                color={instagramColor.toString()}
                                size={22}
                            />
                            <Text>Instagram</Text>
                        </ButtonWrapper>
                    </Touchable>
                </Item>
            </Wrapper>
        </>
    );
};

export default ProductShare;
