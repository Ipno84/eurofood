import Banner from '../../atoms/Banner';
import React from 'react';
import { home } from './../../../../assets/images/banners';

const HomeBanner = ({ source }) => (
    <Banner source={source ? { uri: source } : home} />
);

export default HomeBanner;
