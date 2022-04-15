import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {EmptyFavourite, Header, Space} from '../../components';
import {COLORS} from '../../constants';
import FavouriteCard from './components/FavouriteCard';
import {
  DummyApartmentScreen,
  DummyHotelScreen,
  DummyHouseScreen,
} from '../../assets';

const SavedScreen = () => {
  return (
    <View style={styles.page}>
      <Header title="Favourites" />
      <Space height={24} />
      {/* <EmptyFavourite /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          <FavouriteCard image={DummyApartmentScreen} />
          <FavouriteCard image={DummyHotelScreen} />
          <FavouriteCard image={DummyHouseScreen} />
          <FavouriteCard image={DummyApartmentScreen} />
          <FavouriteCard image={DummyHotelScreen} />
          <FavouriteCard image={DummyHouseScreen} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: COLORS.white},
  cardContainer: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    marginHorizontal: -10,
    flexWrap: 'wrap',
  },
});
