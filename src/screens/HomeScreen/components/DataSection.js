import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import {Space} from '../../../components';

const DataSection = ({icon, total, title}) => {
  return (
    <View style={styles.container}>
      {icon}
      <Space height={4} />
      <Text style={styles.total}>{total}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default DataSection;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  total: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.primary2,
    fontSize: 12,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.primary2,
    fontSize: 12,
    marginTop: -6,
  },
});
