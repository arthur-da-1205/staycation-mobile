import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {CategoriesCard, Header, Space} from '../../components';
import {COLORS} from '../../constants';
import {DummyHouseScreen} from '../../assets';

const HouseScreen = () => {
  return (
    <View style={styles.page}>
      <Header title="House" type="onBack" />
      <Space height={24} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoriesCard dummyImg={DummyHouseScreen} title="Wano Kuni" />
        <CategoriesCard dummyImg={DummyHouseScreen} title="Zou Island" />
        <CategoriesCard dummyImg={DummyHouseScreen} title="Fishment Island" />
        <CategoriesCard dummyImg={DummyHouseScreen} title="Punk Hazard" />

        <Space height={8} />
      </ScrollView>
    </View>
  );
};

export default HouseScreen;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: COLORS.white},
});
