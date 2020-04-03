import { Linking, SafeAreaView, SectionList } from 'react-native';
import styled, { css } from 'styled-components/native';

import { APP_VERSION } from './../../../../constants/BaseConstants';
import React from 'react';
import SectionTitle from './../../atoms/Text/SectionTitle';
import Separator from './../../templates/DrawerContent/Separator';
import Spacer from './../../atoms/Spacer';
import TitleWrapper from './../../atoms/Text/TitleWrapper';
import Touchable from './../../atoms/Button/Touchable';

const sections = [
    {
        title: 'Informazioni',
        data: [
            {
                label: `Eurofood version ${APP_VERSION}`,
                href: ''
            }
        ]
    },
    {
        title: 'Condizioni di utilizzo',
        data: [
            {
                label: 'Condizioni generali di vendita',
                href:
                    'https://www.eurofoodservice.it/content/3-condizioni-generali-di-vendita'
            },
            {
                label: 'Condizioni di registrazione al sito',
                href:
                    'https://www.eurofoodservice.it/content/5-condizioni-registrazione-sito'
            },
            {
                label: 'Privacy',
                href: 'https://www.eurofoodservice.it/content/2-privacy'
            },
            {
                label: 'Note legali',
                href: 'https://www.eurofoodservice.it/content/1-note-legali'
            }
        ]
    }
];

const Settings = () => {
    return (
        <SafeAreaView>
            <SectionList
                sections={sections}
                stickySectionHeadersEnabled={true}
                ListHeaderComponent={() => (
                    <TitleWrapper>
                        <Spacer top={8} />
                        <SectionTitle bigger={true}>Impostazioni</SectionTitle>
                        <Spacer top={16} />
                    </TitleWrapper>
                )}
                ItemSeparatorComponent={() => <Separator />}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item {...item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <SectionWrapper>
                        <SectionText>{title}</SectionText>
                    </SectionWrapper>
                )}
            />
        </SafeAreaView>
    );
};

export default Settings;

const SectionWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.lightGray(1, 0.1)};
    padding-top: 12px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.alterGray(0.6)};
`;
const SectionText = styled.Text`
    font-size: 16px;
    line-height: 16px;
`;

const ListItemWrapper = styled.View`
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: 16px;
    padding-left: 32px;
`;

const ListItemText = styled.Text`
    font-size: 14px;
    line-height: 14px;
`;

const Item = ({ label, href }) => {
    return (
        <Touchable
            onPress={() => {
                if (href) Linking.openURL(href);
            }}>
            <ListItemWrapper>
                <ListItemText>{label}</ListItemText>
            </ListItemWrapper>
        </Touchable>
    );
};
