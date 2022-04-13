import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {CategoriesCard, Header, Space} from '../../components';
import {COLORS} from '../../constants';
import {dummyData} from '../../data/Dummy';

const CategoryScreen = ({route}) => {
  const data = route.params.category_name;
  const dummy = dummyData;
  console.log(data);

  return (
    <View style={styles.page}>
      <Header title={data} type="onBack" />
      <Space height={24} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {dummy.map((item, index) => {
          console.log(item.type);
          if (data === item.type) {
            return (
              <CategoriesCard
                key={index}
                dummyImg={item.img}
                title={item.name}
              />
            );
          }
        })}
        <Space height={8} />
      </ScrollView>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: COLORS.white},
});
