import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {CategoriesCard, Header, Space} from '../../components';
import {COLORS} from '../../constants';

const HotelScreen = () => {
  return (
    <View style={styles.page}>
      <Header title="Hotel" type="onBack" />
      <Space height={24} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />

        <Space height={8} />
      </ScrollView>
    </View>
  );
};

export default HotelScreen;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: COLORS.white},
});
