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
        <Modal
            animationType="fade"
            transparent={true}
            hardwareAccelerated={true}
            visible={visibility}
            onRequestClose={() => setVisibility(false)}>
            <SafeAreaView>
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
                        items={[
                            {
                                id: -1,
                                name: 'Tutte le categorie'
                            },
                            ...items
                        ]}
                        keyExtractor={(item, index) =>
                            keyExtractor
                                ? keyExtractor(item, index)
                                : String(index)
                        }
                    />
                </ModalWrapper>
            </SafeAreaView>
        </Modal>
    );
};

export default ModalSelector;
