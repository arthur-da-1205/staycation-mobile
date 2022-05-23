import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import {COLORS} from '../../../constants';

const CategoriesSection = ({icon, title, onSelect}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
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

CategoriesSection.propTypes = {
  title: PropTypes.string.isRequired,
};
