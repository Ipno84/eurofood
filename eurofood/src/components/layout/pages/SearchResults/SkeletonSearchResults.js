import AnimatedLinearGradient from './../../atoms/AnimatedLinearGradient';
import React from 'react';
import SkeletonProductCard from '../../molecules/ProductCard/SkeletonProductCard';
import isTabletDevice from '../../../../helpers/isTabletDevice';
// import { isTablet } from 'react-native-device-detection';
import styled from 'styled-components/native';

const SkeletonSearchResults = () => {
    return (
        <Wrapper>
            <Row>
                <SkeletonProductCard isInRow={true} isFirst={true} />
                <SkeletonProductCard isInRow={true} isFirst={false} />
                {isTabletDevice() ? (
                    <>
                        <SkeletonProductCard isInRow={true} isFirst={false} />
                        <SkeletonProductCard isInRow={true} isFirst={false} />
                    </>
                ) : null}
            </Row>
            <Row>
                <SkeletonProductCard isInRow={true} isFirst={true} />
                <SkeletonProductCard isInRow={true} isFirst={false} />
                {isTabletDevice() ? (
                    <>
                        <SkeletonProductCard isInRow={true} isFirst={false} />
                        <SkeletonProductCard isInRow={true} isFirst={false} />
                    </>
                ) : null}
            </Row>
            <Row>
                <SkeletonProductCard isInRow={true} isFirst={true} />
                <SkeletonProductCard isInRow={true} isFirst={false} />
                {isTabletDevice() ? (
                    <>
                        <SkeletonProductCard isInRow={true} isFirst={false} />
                        <SkeletonProductCard isInRow={true} isFirst={false} />
                    </>
                ) : null}
            </Row>
            {isTabletDevice() ? (
                <>
                    <Row>
                        <SkeletonProductCard isInRow={true} isFirst={true} />
                        <SkeletonProductCard isInRow={true} isFirst={false} />
                        <SkeletonProductCard isInRow={true} isFirst={false} />
                        <SkeletonProductCard isInRow={true} isFirst={false} />
                    </Row>
                    <Row>
                        <SkeletonProductCard isInRow={true} isFirst={true} />
                        <SkeletonProductCard isInRow={true} isFirst={false} />
                        <SkeletonProductCard isInRow={true} isFirst={false} />
                        <SkeletonProductCard isInRow={true} isFirst={false} />
                    </Row>
                </>
            ) : null}
        </Wrapper>
    );
};

export default SkeletonSearchResults;

const Wrapper = styled.View`
    margin-top: 4px;
`;

const Row = styled.View`
    padding-left: 8px;
    padding-right: 8px;
    flex-direction: row;
    margin-top: 4px;
    margin-bottom: 4px;
`;
