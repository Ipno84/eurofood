import { Modal, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';

import FullScreen from './../../atoms/Wrapper/FullScreen';
import Logo from './../../atoms/Logo';
import { StatusBar } from 'react-native';
import { lightGray } from './../../../../constants/ThemeConstants';
import styled from 'styled-components/native';

const LoaderScreen = ({
    hasServerSettings,
    isLoadingSettings,
    isCachePurged,
    getServerSettings
}) => {
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
        let timeout;
        if (
            showLoader &&
            isCachePurged &&
            !isLoadingSettings &&
            hasServerSettings
        ) {
            timeout = setTimeout(() => {
                setShowLoader(false);
            }, 1000);
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
        };
    }, [
        isCachePurged,
        isLoadingSettings,
        hasServerSettings,
        showLoader,
        setShowLoader
    ]);
    return (
        <Modal animationType="none" transparent={true} visible={showLoader}>
            <SafeAreaView>
                <StatusBar
                    backgroundColor={lightGray.toString()}
                    barStyle="dark-content"
                />
                <FlatList
                    onRefresh={() => {
                        getServerSettings && getServerSettings();
                    }}
                    refreshing={Boolean(isLoadingSettings)}
                    contentContainerStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1
                    }}
                    ListHeaderComponent={() => (
                        <>
                            <FullScreen center={true}>
                                <Logo />
                            </FullScreen>
                        </>
                    )}
                    data={[]}
                    renderItem={() => null}
                />
                {!isLoadingSettings && !hasServerSettings && isCachePurged ? (
                    <TextContainer>
                        <View>
                            <Text>
                                Il servizio è attualmente in manutenzione
                            </Text>
                        </View>
                        <View>
                            <Text>
                                Torna più tardi o trascina la schermata verso il
                                basso per verificare che la manutenzione sia
                                terminata
                            </Text>
                        </View>
                    </TextContainer>
                ) : null}
            </SafeAreaView>
        </Modal>
    );
};

export default LoaderScreen;

const FlatList = styled.FlatList`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white(1)};
`;

const TextContainer = styled.View`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    padding: 16px;
`;

const Text = styled.Text`
    text-align: center;
`;

const View = styled.View`
    padding-bottom: 12px;
`;
