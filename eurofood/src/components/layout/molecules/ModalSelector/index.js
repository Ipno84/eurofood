import { BackHandler, Dimensions, SafeAreaView } from 'react-native';
import React, { useCallback, useEffect, useRef } from 'react';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import ListItem from './../../atoms/Item/ListItem';
import ListSectionHeader from './../../atoms/Item/ListSectionHeader';
import ModalWrapper from './../../atoms/Wrapper/ModalWrapper';
import { black } from '../../../../constants/ThemeConstants';
import { useFocusEffect } from '@react-navigation/native';
import usePrevious from '../../../../hooks/usePrevious';

const { height } = Dimensions.get('window');

const ModalSelector = ({
    visibility,
    setVisibility,
    onPressItem,
    headerTitle,
    items
}) => {
    const bottomSheet = useRef(null);
    const fall = useRef(new Animated.Value(1)).current;
    const prevVisibility = usePrevious(visibility);
    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                if (visibility) {
                    setVisibility(false);
                    return true;
                }
                return false;
            };

            BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () =>
                BackHandler.removeEventListener(
                    'hardwareBackPress',
                    onBackPress
                );
        }, [visibility])
    );
    useEffect(() => {
        if (visibility) {
            bottomSheet.current.snapTo(2);
            bottomSheet.current.snapTo(1);
        } else if (!visibility) {
            bottomSheet.current.snapTo(2);
            bottomSheet.current.snapTo(2);
        }
    }, [visibility]);
    return (
        <ModalWrapper pointerEvents={visibility ? 'auto' : 'none'}>
            <Animated.View
                style={{
                    position: 'absolute',
                    height: height,
                    left: 0,
                    right: 0,
                    top: 0,
                    zIndex: 9,
                    backgroundColor: black.toString(),
                    opacity: Animated.sub(1, Animated.multiply(fall, 1))
                }}
            />
            <BottomSheet
                callbackNode={fall}
                ref={bottomSheet}
                snapPoints={[height, height * 0.4, 0]}
                initialSnap={2}
                enabledBottomClamp={true}
                renderHeader={() => (
                    <ListSectionHeader shadow={false} text={headerTitle} />
                )}
                onCloseEnd={() => setVisibility(false)}
                renderContent={() => {
                    return items.map(item => (
                        <ListItem
                            key={item.id}
                            onPress={() => {
                                if (item && onPressItem) {
                                    onPressItem(item.id);
                                }
                            }}
                            text={item ? item.name : ''}
                        />
                    ));
                }}
            />
        </ModalWrapper>
    );
};

export default ModalSelector;
