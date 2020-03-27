import FlatButton from '../../atoms/Button/FlatButton';
import PreviewWrapper from '../../atoms/Wrapper/PreviewWrapper';
import { ROUTE_NAME_RECIPE } from '../../../../constants/RouteConstants';
import React from 'react';
import RecipePreview from '../../atoms/Image/RecipePreview';
import RecipeWrapper from '../../atoms/Wrapper/RecipeWrapper';
import SectionTitle from '../../atoms/Text/SectionTitle';
import useAppNavigation from '../../../../hooks/navigation/useAppNavigation';
import { video } from './../../../../assets/images/placeholder';

const VideoRecipe = () => {
    const { navigate } = useAppNavigation();
    return (
        <>
            <SectionTitle>FRASE VIDEO/RICETTA</SectionTitle>
            <RecipeWrapper>
                <PreviewWrapper>
                    <RecipePreview resizeMode="cover" source={video} />
                </PreviewWrapper>
                <FlatButton
                    shadow={true}
                    onPress={() => navigate(ROUTE_NAME_RECIPE)}
                    darkOrange={true}>
                    Scopri la ricetta del giorno
                </FlatButton>
            </RecipeWrapper>
        </>
    );
};

export default VideoRecipe;
