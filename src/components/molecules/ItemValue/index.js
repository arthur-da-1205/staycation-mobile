import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import PropTypes from 'prop-types';

const ItemValue = ({label, value, valueColor = COLORS.primary2}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>{label}</Text>
      <Text style={styles.textValue(valueColor)}>{value}</Text>
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
  textLabel: {fontFamily: 'Poppins-Regular', color: COLORS.gray},
  textValue: color => ({fontFamily: 'Poppins-Regular', color: color}),
});

ItemValue.propTypes = {
  label: PropTypes.string.isRequired,
};
