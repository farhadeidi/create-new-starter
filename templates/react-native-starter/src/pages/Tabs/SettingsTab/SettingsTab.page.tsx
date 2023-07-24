import ListItem from '@/components/elements/ListItem/ListItem';
import PageWrapper from '@/components/layout/PageWrapper/PageWrapper';
import LanguagePicker from '@/components/modules/LanguagePicker/LanguagePicker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { View } from 'react-native-ui-lib';

const SettingsTab: React.FC<
  NativeStackScreenProps<RootStack, 'SettingsTab'>
> = ({ navigation }) => {
  const { t } = useTranslation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View paddingR-16 centerV>
            <LanguagePicker />
          </View>
        );
      },
    });
  }, []);
  return (
    <PageWrapper>
      <ScrollView>
        <View padding-16>
          <ListItem label={t('App Info')} iconProps={{ name: 'barcode' }} />
        </View>
      </ScrollView>
    </PageWrapper>
  );
};

export default SettingsTab;
