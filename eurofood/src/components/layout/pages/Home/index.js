import React from 'react';
import { SafeAreaView } from 'react-native';
import generateTemplate from './../../../../helpers/generateTemplate';
import getHomeTemplateSelector from './../../../../state/selectors/SettingsSelectors/getHomeTemplateSelector';
import { useSelector } from 'react-redux';

const Home = () => {
    const template = useSelector(state => getHomeTemplateSelector(state));
    if (!template) return null;
    return <SafeAreaView>{generateTemplate(template)}</SafeAreaView>;
};

export default Home;
