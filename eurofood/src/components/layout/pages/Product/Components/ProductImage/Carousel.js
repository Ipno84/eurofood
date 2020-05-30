import React, { useState } from 'react';

import ImageViewer from 'react-native-image-zoom-viewer';
import { Modal } from 'react-native';
import getProductImageUrlsSelector from '../../../../../../state/selectors/ProductsSelectors/getProductImageUrlsSelector';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

const Carousel = ({ id, height }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const imagesUrls = useSelector(state =>
        getProductImageUrlsSelector(state, id)
    );
    if (!imagesUrls || (imagesUrls && imagesUrls.length === 0)) return null;
    return (
        <>
            <Touchable
                height={height}
                onPress={() => {
                    console.log('TEST');
                    setModalOpen(true);
                }}>
                <TouchableWrapper height={height} />
            </Touchable>
            <Modal
                transparent={true}
                visible={modalOpen}
                hardwareAccelerated={true}
                onRequestClose={() => setModalOpen(false)}>
                <ImageViewer imageUrls={imagesUrls.map(url => ({ url }))} />
            </Modal>
        </>
    );
};

export default Carousel;

const Touchable = styled.TouchableOpacity`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white(0)};
    z-index: 999;
    width: 100%;
    height: ${({ height }) => (height ? height : 360)}px;
`;

const TouchableWrapper = styled.View`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white(0)};
    z-index: 999;
    width: 100%;
    height: ${({ height }) => (height ? height : 360)}px;
`;
