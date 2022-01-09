import React, {Fragment} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Header from './src/components/Header';
import {colors} from './src/global/styles';

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.buttons}} />
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={colors.statusbar}
          />
          <Header title="MY ACCOUNT" />
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
