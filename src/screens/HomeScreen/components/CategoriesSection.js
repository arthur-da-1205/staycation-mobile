import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';

const CategoriesSection = ({icon, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

export default CategoriesSection;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  iconContainer: {
    borderColor: COLORS.gray,
    borderWidth: 1.5,
    borderRadius: 8,
    width: 72,
    paddingVertical: 8,
    alignItems: 'center',
    marginBottom: 6,
  },
  titleStyle: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.primary2,
    fontSize: 12,
  },
});
