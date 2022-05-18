import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {EmptyTrips, Header, Space, TripsTabSection} from '../../components';

const TripsScreen = () => {
  return (
    <View style={styles.page}>
      {/* <EmptyTrips /> */}
      <View style={styles.container}>
        <Header title="Your Trips" />
        <Space height={18} />
        <TripsTabSection />
      </View>
    </View>
  );
};

export default TripsScreen;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: COLORS.white},
  container: {marginHorizontal: 24, flex: 1},
});
