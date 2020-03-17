import ButtonWrapper from '../../atoms/Wrapper/ButtonWrapper';
import FlatButton from '../../atoms/Button/FlatButton';
import InnerTitle from '../../atoms/Text/InnerTitle';
import PlainButton from '../../atoms/Button/PlainButton';
import React from 'react';
import Styled from './styled';

const LoginBlock = () => {
    return (
        <Styled>
            <InnerTitle>Accedi per un’esperienza migliore</InnerTitle>
            <ButtonWrapper>
                <PlainButton onPress={() => alert('Accedi')}>
                    Accedi
                </PlainButton>
            </ButtonWrapper>
            <FlatButton onPress={() => alert('Crea un account')} azure={true}>
                Crea un account
            </FlatButton>
        </Styled>
    );
};

export default LoginBlock;
