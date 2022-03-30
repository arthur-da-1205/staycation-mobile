import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../constants';

const InputField = ({label, iconName, placeholder, ...props}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.textField}>
        {/* <Icon name={'arrow-right-box'} size={20} /> */}
        <TextInput
          style={styles.labelText}
          placeholderTextColor={COLORS.placeholder}
          placeholder={placeholder}
          {...props}
        />
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: COLORS.primary2,
    fontFamily: 'Poppins-Regular',
    marginBottom: 4,
  },
  textField: {
    // flexDirection: 'row',
    // alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 8,
    borderColor: COLORS.primary2,
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: 20,
  },

  labelText: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    color: COLORS.primary2,
    fontSize: 14,
  },
});
