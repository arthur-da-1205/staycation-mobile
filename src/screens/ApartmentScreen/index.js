import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {CategoriesCard, Header, Space} from '../../components';
import {COLORS} from '../../constants';
import {DummyApartmentScreen} from '../../assets';

const ApartmentScreen = () => {
  return (
    <View style={styles.page}>
      <Header title="Apartment" type="onBack" />
      <Space height={24} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoriesCard dummyImg={DummyApartmentScreen} title="Dressrosa" />
        <CategoriesCard dummyImg={DummyApartmentScreen} title="Enies Lobby" />
        <CategoriesCard dummyImg={DummyApartmentScreen} title="Alabasta" />
        <CategoriesCard dummyImg={DummyApartmentScreen} title="Skypie" />

        <Space height={8} />
      </ScrollView>
    </View>
  );
};

export default ApartmentScreen;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: COLORS.white},
});
