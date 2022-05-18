import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {DummyDetailScreen} from '../../../assets';
import {COLORS} from '../../../constants';

const ItemListTrips = ({type, onPress}) => {
  const renderContent = () => {
    switch (type) {
      case 'progress':
        return (
          <>
            <View>
              <Text style={styles.textTitle}>Ocean Land</Text>
              <Text style={styles.textSubtitle}>2 nights • 14.200.000 IDR</Text>
            </View>
          </>
        );

      case 'past-trips':
        return (
          <>
            <View style={styles.leftTextContainer}>
              <Text style={styles.textTitle}>Ocean Land</Text>
              <Text style={styles.textSubtitle}>2 nights • 14.200.000 IDR</Text>
            </View>

            <View style={styles.rightTextContainer}>
              <Text style={styles.textDate}>29 Juni 2022</Text>
              <Text style={styles.textStatus}>Finished</Text>
            </View>
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.container}>
        <Image source={DummyDetailScreen} style={styles.image} />
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListTrips;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {width: 62, height: 62, borderRadius: 8, marginRight: 12},
  textTitle: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.primary2,
    fontSize: 16,
  },
  textSubtitle: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.gray,
    fontSize: 12,
  },
  leftTextContainer: {flex: 1},
  rightTextContainer: {alignItems: 'flex-end'},
  textDate: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.gray,
    fontSize: 10,
  },
  textStatus: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.green,
    fontSize: 10,
  },
});
