import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {Space, VacationCard} from '../../components';
import {categories} from '../../data/Category';
import CategoriesSection from './components/CategoriesSection';
import {statistic} from '../../data/Statistic';
import DataSection from './components/DataSection';
import {dummyData} from '../../data/Dummy';
import HeaderSection from './components/HeaderSection';

const TitleSectionBar = ({title}) => {
  return (
    <View style={styles.titleBarContainer}>
      <Text style={styles.titleBar}>{title}</Text>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const categoriesData = categories;
  const statisticData = statistic;
  // const dummyData = dummyData;

  const renderMostPicked = itemData => {
    const data = itemData.item;
    console.log(data);
    return (
      <VacationCard
        bigImgType
        titleName={data.name}
        subtitle={data.description}
        price={data.price_per_night}
        dummyImg={data.img}
        type="big-card"
      />
    );
  };

  return (
    <View style={styles.page}>
      <HeaderSection />
      <Space height={24} />
      <View style={styles.statisticContainer}>
        {statisticData.map((item, index) => {
          console.log(item.name);
          return (
            <DataSection
              key={index}
              title={item.name}
              total={item.count}
              icon={item.icon}
            />
          );
        })}
      </View>
      <Space height={16} />
      {/* <ScrollView> */}
      <TitleSectionBar title="Categories" />
      <View style={styles.categoriesContainer}>
        {categoriesData.map((item, index) => {
          // console.log(item.category_name);
          return (
            <CategoriesSection
              key={index}
              title={item.category_name}
              icon={item.icon}
              onSelect={() => {
                navigation.navigate('CategoryScreen', {
                  category_name: item.category_name,
                });
              }}
            />
          );
        })}
      </View>
      <View style={styles.line} />
      <Space height={16} />
      {/* </ScrollView> */}
      <TitleSectionBar title="Most Picked" />
      <View style={styles.mostPickContainer}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={dummyData}
          renderItem={renderMostPicked}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  statisticContainer: {
    marginHorizontal: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  line: {
    backgroundColor: COLORS.gray,
    height: 1.5,
    marginHorizontal: 24,
    marginTop: 10,
  },
  mostPickContainer: {marginHorizontal: 24, paddingBottom: 14},
  titleBarContainer: {
    backgroundColor: COLORS.primary,
    width: 195,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    paddingLeft: 24,
    paddingVertical: 6,
    marginBottom: 20,
  },
  titleBar: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.white,
    fontSize: 16,
  },
});
