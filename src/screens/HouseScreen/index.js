import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {CategoriesCard, Header, Space} from '../../components';

const HouseScreen = () => {
  return (
    <View style={styles.page}>
      <Header title="Hotel" type="onBack" />
      <Space height={24} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoriesCard dummyImg={DummyHotelScreen} title="Mariejoa" />
        <CategoriesCard dummyImg={DummyHotelScreen} title="Marineford" />
        <CategoriesCard dummyImg={DummyHotelScreen} title="Impel Down" />
        <CategoriesCard dummyImg={DummyHotelScreen} title="Water 7" />

        <Space height={8} />
      </ScrollView>
    </View>
  );
};

export default HouseScreen;
