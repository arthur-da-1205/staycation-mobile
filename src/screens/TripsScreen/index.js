import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {EmptyTrips} from '../../components';

const TripsScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <EmptyTrips />
    </View>
  );
};

export default TripsScreen;

const styles = StyleSheet.create({});
