import React, { useEffect } from 'react';

import LogoImage from './LogoImage';
import NavigatorRef from './../../../../helpers/NavigatorRef';
import { ROUTE_NAME_HOME } from '../../../../constants/RouteConstants';
import { TouchableOpacity } from 'react-native';
import TreeItemsReferences from './../../../../helpers/TreeItemsReferences';
import styled from 'styled-components/native';

const treeItemsReferences = new TreeItemsReferences();

let timeout = null;

const Logo = () => {
    useEffect(() => {
        () => {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
        };
    }, []);
    return (
        <Wrapper>
            <TouchableOpacity
                onPress={() => {
                    const isHome = NavigatorRef.isCurrentRouteHome();
                    const homeFlatList = treeItemsReferences.getReference(
                        'homeFlatList'
                    );
                    if (isHome && homeFlatList) {
                        homeFlatList.scrollToOffset({
                            offset: 0,
                            animated: true
                        });
                    } else if (homeFlatList) {
                        NavigatorRef.reset({
                            index: 1,
                            routes: [{ name: ROUTE_NAME_HOME }]
                        });
                        timeout = setTimeout(() => {
                            homeFlatList.scrollToOffset({
                                offset: 0,
                                animated: true
                            });
                        }, 0);
                    }
                }}>
                <LogoImage />
            </TouchableOpacity>
        </Wrapper>
    );
};

export default Logo;

const Wrapper = styled.View``;
