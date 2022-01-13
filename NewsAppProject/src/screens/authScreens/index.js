import React, {memo, useCallback} from 'react';
import {Icon} from 'react-native-elements';
import {Header} from '../../components';
import {styleSignIn} from './styled';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {colors, parameters, container} from '../../global/styles';
import * as Animatable from 'react-native-animatable';

const SignInScreen = memo(() => {
  const renderSignIn = useCallback(() => {
    return (
      <View style={container.container.container}>
        <Header title="MY ACCOUNT" type="arrow-left" />
        <View style={styleSignIn.title.container}>
          <Text style={styleSignIn.title.title}>Sign-in</Text>
        </View>
        <View style={styleSignIn.subTitle.container}>
          <Text style={styleSignIn.subTitle.title}>
            Please enter the email password
          </Text>
          <Text style={styleSignIn.subTitle.title}>
            Registered with your account
          </Text>
        </View>
        <View style={styleSignIn.textInput1.container}>
          <View>
            <TextInput
              style={styleSignIn.textInput1.input}
              placeholder="Email"
            />
          </View>
          <View style={styleSignIn.textInput2.input}>
            <Animatable.View>
              <Icon
                name="lock"
                iconStyle={styleSignIn.textInput2.iconLock}
                type="material"
              />
            </Animatable.View>
            <TextInput
              placeholder="Password"
              style={styleSignIn.textInput2.inputPassword}
            />
            <Animatable.View>
              <Icon
                name="visibility-off"
                iconStyle={styleSignIn.textInput2.iconVisibilityOff}
                type="material"
              />
            </Animatable.View>
          </View>
        </View>
      </View>
    );
  });
  return renderSignIn();
});

export default SignInScreen;
