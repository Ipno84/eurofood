import FlatButton from '../../atoms/Button/FlatButton';
import React from 'react';

const VideoRecipe = () => {
    return (
        <FlatButton
            shadow={true}
            onPress={() => alert('Scopri la ricetta del giorno')}
            darkOrange={true}>
            Scopri la ricetta del giorno
        </FlatButton>
    );
};

export default VideoRecipe;
