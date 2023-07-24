import VectorIcon from '@/components/elements/VectorIcon/VectorIcon';
import PageWrapper from '@/components/layout/PageWrapper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native-ui-lib';
import { useToast } from 'react-native-toast-notifications';

const HomeTab: React.FC<NativeStackScreenProps<RootStack, 'HomeTab'>> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const toast = useToast();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button round link size="xSmall">
          <VectorIcon name="notifications" size={20} />
        </Button>
      ),
    });
  }, [navigation]);

  return (
    <PageWrapper>
      <View center flex-1>
        <Text>{t('Home')}</Text>
        <Button
          label={t('Show a toast')}
          marginT-8
          onPress={() => {
            toast.show('Task finished successfully', {
              type: 'normal',
            });
          }}
        />
      </View>
    </PageWrapper>
  );
};

export default HomeTab;
