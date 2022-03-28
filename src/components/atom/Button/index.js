import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({
  image,
  labelBtn,
  onPress,
  btnColor = 'blue',
  btnHeight = 9,
  textColor = '#FFFF',
  fontSize = 16,
}) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer(btnColor, btnHeight)}
      onPress={onPress}>
      <Image source={image} />
      <View style={styles.textContainer}>
        <Text style={styles.textBtn(textColor, fontSize)}>{labelBtn}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnContainer: (btnColor, btnHeight) => ({
    backgroundColor: btnColor,
    alignItems: 'center',
    paddingVertical: btnHeight,
    paddingHorizontal: 9,
    borderRadius: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  }),
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 2,
  },
  textBtn: (textColor, fontSize) => ({
    fontFamily: 'Poppins-Regular',
    fontSize: fontSize,
    color: textColor,
  }),
});
