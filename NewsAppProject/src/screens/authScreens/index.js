import React, {memo, useCallback, useState, useRef} from 'react';
import {Icon, Button} from 'react-native-elements';
import {Header} from '../../components';
import {styleSignIn} from './styled';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {colors, parameters, container} from '../../global/styles';
import * as Animatable from 'react-native-animatable';

const SignInScreen = memo(() => {
  const [textInput2Focused, setTextInput2Focused] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
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
              ref={textInput1}
            />
          </View>
          <View style={styleSignIn.textInput2.input}>
            <Animatable.View
              animation={textInput2Focused ? 'fadeInLeft' : ''}
              duration={400}>
              <Icon
                name="lock"
                iconStyle={styleSignIn.textInput2.iconLock}
                type="material"
              />
            </Animatable.View>
            <TextInput
              placeholder="Password"
              style={styleSignIn.textInput2.inputPassword}
              ref={textInput2}
              onFocus={() => {
                setTextInput2Focused(true);
              }}
              onBlur={() => {
                setTextInput2Focused(false);
              }}
            />
            <Animatable.View
              animation={textInput2Focused ? 'fadeInLeft' : ''}
              duration={400}>
              <Icon
                name="visibility-off"
                iconStyle={styleSignIn.textInput2.iconVisibilityOff}
                type="material"
              />
            </Animatable.View>
          </View>
        </View>
        {/* Button */}
        <View style={styleSignIn.buttonSignIn.container}>
          <Button
            title="SIGN IN"
            buttonStyle={styleSignIn.buttonSignIn.button}
            titleStyle={styleSignIn.buttonSignIn.title}
          />
        </View>
        {/* Forgot Password */}
        <View style={styleSignIn.forgotPassword.container}>
          <Text style={styleSignIn.forgotPassword.title}>Forgot Password</Text>
        </View>
        {/* OR */}
        <View style={styleSignIn.OR.container}>
          <Text style={styleSignIn.OR.title}>OR</Text>
        </View>
      </View>
    );
  }, [textInput2Focused]);
  return renderSignIn();
});

export default SignInScreen;
