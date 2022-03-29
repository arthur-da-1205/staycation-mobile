import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const InputField = ({iconName, placeholder, ...props}) => {
  return (
    <View style={styles.textField}>
      <Icon name={iconName} size={20} />
      <TextInput
        style={styles.labelText}
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  labelText: {
    fontFamily: 'Poppins-Regular',
    color: 'gray',
    fontSize: 16,
    flex: 2,
    marginLeft: 16,
  },
  textField: {
    color: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
