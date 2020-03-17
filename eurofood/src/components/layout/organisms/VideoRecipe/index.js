import FlatButton from '../../atoms/Button/FlatButton';
import PreviewWrapper from '../../atoms/Wrapper/PreviewWrapper';
import React from 'react';
import RecipePreview from '../../atoms/Image/RecipePreview';
import RecipeWrapper from '../../atoms/Wrapper/RecipeWrapper';
import SectionTitle from '../../atoms/Text/SectionTitle';
import { video } from './../../../../assets/images/placeholder';

const VideoRecipe = () => {
    return (
        <>
            <SectionTitle>FRASE VIDEO/RICETTA</SectionTitle>
            <RecipeWrapper>
                <PreviewWrapper>
                    <RecipePreview resizeMode="cover" source={video} />
                </PreviewWrapper>
                <FlatButton
                    shadow={true}
                    onPress={() => alert('Scopri la ricetta del giorno')}
                    darkOrange={true}>
                    Scopri la ricetta del giorno
                </FlatButton>
            </RecipeWrapper>
        </>
    );
};

export default VideoRecipe;
