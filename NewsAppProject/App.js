import React, {Fragment, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {colors} from './src/global/styles';
import {SignInScreen} from './src/screens';

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.buttons}} />
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.statusbar}
        />
        <SignInScreen />
      </View>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.buttons}} />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 0,
    backgroundColor: colors.buttons,
  },
});

export default App;
