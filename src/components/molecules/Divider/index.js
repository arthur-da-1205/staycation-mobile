import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {COLORS} from '../../../constants';

const Divider = ({marginTop, marginBottom}) => {
  return <View style={styles.divider(marginBottom, marginTop)} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: (marginBottom, marginTop) => ({
    backgroundColor: COLORS.gray,
    height: 1,
    // marginHorizontal: 24,
    marginTop: marginTop,
    marginBottom: marginBottom,
  }),
});

Divider.propTypes = {
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
};
