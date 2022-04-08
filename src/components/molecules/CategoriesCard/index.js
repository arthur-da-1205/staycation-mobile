import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Header from '../Header';
import {Button, Space} from '../../atom';
import {COLORS, DIMENSIONS} from '../../../constants';
import {DummyHotelScreen, IcStar} from '../../../assets';

const CategoriesCard = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyHotelScreen} style={styles.image} />

      <View style={styles.containerRight}>
        <Text style={styles.title}>Green Park</Text>
        <Text style={styles.subTitle}>Bogor, Indonesia</Text>
        <View style={styles.containerRating}>
          <IcStar />
          <Text style={styles.textRating}>4.2</Text>
        </View>
        <Text style={styles.textPrice}>88.023.456 IDR</Text>
        <Button labelBtn="Let's go" btnHeight={4} />
      </View>
    </View>
  );
};

export default CategoriesCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGray,
    height: 156,
    marginHorizontal: 24,
    marginBottom: 16,
    borderRadius: 16,
    flexDirection: 'row',
  },
  image: {
    height: '100%',
    width: DIMENSIONS.widthScreen / 2 - 24,
    borderRadius: 16,
  },
  containerRight: {
    margin: 12,
    flex: 1,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.primary2,
    fontSize: 16,
  },
  subTitle: {
    fontFamily: 'Poppins-Light',
    color: COLORS.gray,
    fontSize: 12,
  },
  containerRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRating: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.primary2,
    fontSize: 16,
    marginLeft: 4,
    top: 2,
  },
  textPrice: {fontFamily: 'Poppins-Medium', color: COLORS.green},
});
