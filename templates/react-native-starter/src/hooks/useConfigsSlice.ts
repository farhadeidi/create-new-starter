import { useDispatch, useSelector } from 'react-redux';
import { selector, mutateName, mutateLanguage } from '@/store/configs.slice';
import { useColorScheme, useWindowDimensions } from 'react-native';
import { useTranslation } from 'react-i18next';

const useHabitsSlice = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const state = useSelector(selector);
  const scheme = useColorScheme();
  const dimensions = useWindowDimensions();

  const setName = (name: string | undefined) => {
    dispatch(mutateName(name || ''));
  };

  const setLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language || 'en');
    dispatch(mutateLanguage(language || 'en'));
  };

  return {
    state,
    language: state.language,
    setName,
    setLanguage,
    name: state.name,
    dimensions,
    isDarkMode: scheme === 'dark',
  };
};

export default useHabitsSlice;
