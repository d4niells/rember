import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, configureFonts } from 'react-native-paper';

import Routes from '~/routes';

import { LIGHT_THEME } from '~/utils/constants';

import fonts from '~/styles/fonts';
import { dark, light } from '~/styles/theme';

export default function App() {
  const configs = useSelector((state) => state.user.configs);

  const theme = useMemo(() => {
    const themeColor = configs?.theme === LIGHT_THEME ? light : dark;

    return {
      ...themeColor,
      fonts: configureFonts(fonts),
      roundness: 4,
    };
  }, [configs]);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
}
