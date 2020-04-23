import React from 'react';
import { logo } from './../../../../assets/images';
import styled from 'styled-components/native';

export default class LogoImage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <Container>
                <Image fadeDuration={0} resizeMode="contain" source={logo} />
                <Bars>
                    <Bar color={'#F0DF15'} />
                    <Bar color={'#F3A30C'} />
                    <Bar color={'#DA3216'} />
                    <Bar color={'#AE1F1A'} />
                </Bars>
            </Container>
        );
    }
}

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
