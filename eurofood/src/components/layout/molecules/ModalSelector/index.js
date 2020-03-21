import { Modal, SafeAreaView } from 'react-native';

import ModalWrapper from './../../atoms/Wrapper/ModalWrapper';
import React from 'react';
import SelectionList from './../../molecules/List/SelectionList';

const ModalSelector = ({
    visibility,
    setVisibility,
    onPressItem,
    onPressNotItem,
    headerTitle,
    items,
    keyExtractor
}) => {
    return (
        <SafeAreaView>
            <Modal
                animationType="fade"
                transparent={true}
                hardwareAccelerated={true}
                visible={visibility}
                onRequestClose={() => setVisibility(false)}>
                <ModalWrapper onPress={() => setVisibility(false)}>
                    <SelectionList
                        onScrollToEnd={() => setVisibility(false)}
                        onPressHeader={() => setVisibility(false)}
                        onPressItem={item => {
                            if (onPressItem) onPressItem(item);
                            setVisibility(false);
                        }}
                        onPressNotItem={onPressNotItem}
                        headerTitle={headerTitle}
                        items={items}
                        keyExtractor={(item, index) =>
                            keyExtractor
                                ? keyExtractor(item, index)
                                : String(index)
                        }
                    />
                </ModalWrapper>
            </Modal>
        </SafeAreaView>
    );
};

export default ModalSelector;
