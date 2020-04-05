import React from 'react';

import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  instructions: {
    color: '#f1f1f1',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  welcome: {
    marginVertical: Dimensions.get('window').height * 0.11,
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Main = () => (
  <ImageBackground
    source={{
      uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
    }}
    style={styles.container}
    resizeMode="cover">
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Text style={styles.welcome}>Rember</Text>
    <Text style={styles.instructions}>
      Criar tasks, organiza-las e atribuir localização nas suas tasks para que
      você seja notificado quando chegar no local
    </Text>
  </ImageBackground>
);

export default Main;
