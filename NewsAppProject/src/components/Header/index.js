import React, {memo, useCallback} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {styledHeader} from './styled';
import {colors, parameters} from '../../global/styles';
import {Icon} from 'react-native-elements';
const Header = memo(({title, type}) => {
  const renderHeader = useCallback(() => {
    return (
      <View style={styledHeader.header}>
        <View style={{marginLeft: 20}}>
          <Icon
            type="material-community"
            name={type}
            color={colors.headerText}
            size={28}
            onPress={() => {}}
          />
        </View>
        <View>
          <Text style={styledHeader.headerText}>{title}</Text>
        </View>
      </View>
    );
  }, [title, type]);
  return renderHeader();
});
export default Header;
