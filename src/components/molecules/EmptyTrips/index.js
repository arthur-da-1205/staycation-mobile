import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button, Space} from '../../atom';
import {IlEmptyTrips} from '../../../assets';
import {COLORS} from '../../../constants';

const EmptyTrips = () => {
  return (
    <View>
      <Space height={64} />
      <View style={styles.container}>
        <Image source={IlEmptyTrips} style={styles.image} />
        <Text style={styles.textTitle}>Oops! No Trip</Text>
        <Text style={styles.textSubTitle}>Seems like you have not</Text>
        <Text style={styles.textSubTitle}>booking any trip</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button labelBtn="Find Place" />
      </View>
    </View>
  );
};

export default EmptyTrips;

const styles = StyleSheet.create({
  container: {alignItems: 'center', paddingHorizontal: 24, marginBottom: 24},
  image: {width: 275, height: 264, marginBottom: 16},
  textTitle: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.primary2,
    fontSize: 28,
    marginBottom: 12,
  },
  textSubTitle: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.gray,
  },
  buttonContainer: {marginHorizontal: 98},
});
