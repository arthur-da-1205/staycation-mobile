import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS} from '../../../constants';

const FavouriteCard = ({image}) => {
  const width = (DIMENSIONS.widthScreen - 48 - 20) / 2;
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image(width)} />
      <Text style={styles.title} numberOfLines={1}>
        Green Park
      </Text>
      <Text style={styles.subTitle} numberOfLines={1}>
        Bogor, Indonesia
      </Text>
    </View>
  );
};

export default FavouriteCard;

const styles = StyleSheet.create({
  container: {marginHorizontal: 10, marginBottom: 20},
  image: width => ({
    width: width,
    height: width / 1.14,
    borderRadius: 16,
    marginBottom: 12,
  }),
  title: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.primary2,
    fontSize: 16,
  },
  subTitle: {fontFamily: 'Poppins-Light', color: COLORS.gray, fontSize: 13},
});
