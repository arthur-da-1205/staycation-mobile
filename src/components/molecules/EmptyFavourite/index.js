import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Header';
import {Space} from '../../atom';
import {IlEmptyFavourite} from '../../../assets';
import {COLORS} from '../../../constants';

const EmptyFavourite = () => {
  return (
    <View>
      <View style={styles.IlustrationContainer}>
        <IlEmptyFavourite />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>No favourites yet!</Text>
        <Text style={styles.subTitle}>
          Find your place, and save them here to your favourites
        </Text>
      </View>
    </View>
  );
};

export default EmptyFavourite;

const styles = StyleSheet.create({
  IlustrationContainer: {alignItems: 'center'},
  textContainer: {alignItems: 'center', paddingHorizontal: 50},
  title: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.primary2,
    fontSize: 22,
    marginBottom: 12,
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.gray,
    textAlign: 'center',
  },
});
