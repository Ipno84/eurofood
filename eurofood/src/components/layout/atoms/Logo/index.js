import React, { useEffect } from 'react';

import LogoImage from './LogoImage';
import NavigatorRef from './../../../../helpers/NavigatorRef';
import { ROUTE_NAME_HOME } from '../../../../constants/RouteConstants';
import Touchable from './../Button/Touchable';
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
            <Touchable
                onPress={() => {
                    const navRef = new NavigatorRef();
                    const isHome = navRef.isCurrentRouteHome();
                    const homeFlatList = treeItemsReferences.getReference(
                        'homeFlatList'
                    );
                    if (isHome && homeFlatList) {
                        homeFlatList.scrollToOffset({
                            offset: 0,
                            animated: true
                        });
                    } else if (homeFlatList) {
                        navRef.reset({
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
            </Touchable>
        </Wrapper>
    );
};

export default Logo;

const Wrapper = styled.View``;
