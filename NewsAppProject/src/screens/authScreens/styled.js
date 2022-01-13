import {colors, parameters, Fonts} from '../../global/styles';

export const styleSignIn = {
  title: {
    container: {
      marginLeft: 20,
      marginTop: 10,
    },
    title: {
      color: '#ff8c52',
      fontSize: 20,
      fontFamily: Fonts.FontsBold,
    },
  },
  subTitle: {
    container: {
      alignItems: 'center',
      marginTop: 10,
    },
    title: {
      color: colors.grey3,
      fontSize: 16,
      fontFamily: Fonts.FontsRegular,
    },
  },
  textInput1: {
    container: {
      marginTop: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#86939e',
      marginHorizontal: 20,
      borderRadius: 12,
      marginBottom: 20,
      paddingLeft: 15,
    },
  },
  textInput2: {
    container: {
      marginTop: 10,
    },
    input: {
      borderWidth: 1,
      borderRadius: 12,
      marginHorizontal: 20,
      borderColor: '#86939e',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 15,
    },
    inputPassword: {
      width: "80%"
    },
    iconLock: {
      color: colors.grey3
    },
    iconVisibilityOff: {
      color: colors.grey3,
      marginRight: 10
    }
  },
};
