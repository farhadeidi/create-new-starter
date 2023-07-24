import { useConfigsSlice } from '@/hooks';
import { supportedLanguages } from '@/utils/i18n';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Picker, Text, View, WheelPicker } from 'react-native-ui-lib';

export type LanguagePickerProps = {};
const LanguagePicker: React.FC<LanguagePickerProps> = () => {
  const { i18n } = useTranslation();
  const { setLanguage, isDarkMode } = useConfigsSlice();
  const language = supportedLanguages.find(el => el.value === i18n.language);

  return (
    <View key={isDarkMode ? 'dark' : 'light'}>
      <Picker
        value={i18n.language}
        label="Language"
        placeholder={'Language'}
        enableModalBlur
        floatingPlaceholder
        renderPicker={() => {
          return (
            <View>
              <Text sm>
                {`${language?.value.toUpperCase()} ${language?.emoji}`}
              </Text>
            </View>
          );
        }}
        onChange={(value: string) => {
          if (!!value) {
            setLanguage(value);
          }
        }}
        size={'large'}
      >
        {supportedLanguages.map(language => {
          return (
            <Picker.Item
              key={language.value}
              label={language.nativeLabel}
              value={language.value}
            />
          );
        })}
      </Picker>
    </View>
  );
};

export default LanguagePicker;
