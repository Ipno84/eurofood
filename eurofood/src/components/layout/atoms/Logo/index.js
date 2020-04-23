import React, { useEffect } from 'react';

import NavigatorRef from './../../../../helpers/NavigatorRef';
import { ROUTE_NAME_HOME } from '../../../../constants/RouteConstants';
import Touchable from './../Button/Touchable';
import TreeItemsReferences from './../../../../helpers/TreeItemsReferences';
import { logo } from './../../../../assets/images';
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
                <Container>
                    <Image resizeMode="contain" source={logo} />
                    <Bars>
                        <Bar color={'#F0DF15'} />
                        <Bar color={'#F3A30C'} />
                        <Bar color={'#DA3216'} />
                        <Bar color={'#AE1F1A'} />
                    </Bars>
                </Container>
            </Touchable>
        </Wrapper>
    );
};

export default Logo;

const Wrapper = styled.View``;

const Container = styled.View``;

const Image = styled.Image`
    width: 180px;
    height: 40px;
`;

const Bars = styled.View`
    height: 4px;
    flex-direction: row;
`;

const Bar = styled.View`
    background-color: ${({ color }) => color};
    flex: 1;
`;
