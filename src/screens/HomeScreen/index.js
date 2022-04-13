import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {Space, VacationCard} from '../../components';
import {
  DummyHomeScreen1,
  DummyHomeScreen2,
  DummyHomeScreen3,
  DummyHomeScreen4,
} from '../../assets';
import {categories} from '../../data/Category';
import CategoriesSection from './components/CategoriesSection';
import {statistic} from '../../data/Statistic';
import DataSection from './components/DataSection';
import {dummyData} from '../../data/Dummy';

const TitleSectionBar = ({title}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        width: 195,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        paddingLeft: 24,
        paddingVertical: 6,
        marginBottom: 20,
      }}>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: COLORS.white,
          fontSize: 16,
        }}>
        {title}
      </Text>
    </View>
  );
};

const HomeScreen = () => {
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 16,
          marginHorizontal: 24,
        }}>
        <View style={{flex: 1.2}}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: COLORS.primary,
              fontSize: 22,
            }}>
            Stay
            <Text style={{color: COLORS.primary2}}>cation.</Text>
          </Text>
          <Text style={{fontFamily: 'Poppins-Regular', color: COLORS.gray}}>
            Let’s find best place
          </Text>
        </View>
        <View
          style={{
            backgroundColor: COLORS.lightGray,
            flex: 1,
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 8,
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingRight: 8,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: COLORS.primary2,
              fontSize: 12,
            }}>
            Welcome
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              color: COLORS.primary2,
              fontSize: 18,
            }}>
            John Doe
          </Text>
        </View>
      </View>

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

      <Space height={20} />

      {/* <ScrollView> */}
      <TitleSectionBar title="Categories" />
      <View style={styles.categoriesContainer}>
        {categoriesData.map((item, index) => {
          console.log(item.category_name);
          return (
            <CategoriesSection
              key={index}
              title={item.category_name}
              icon={item.icon}
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
  mostPickContainer: {marginHorizontal: 24},
});
