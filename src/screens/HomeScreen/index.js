import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {Space, VacationCard} from '../../components';
import {
  DummyHomeScreen1,
  DummyHomeScreen2,
  DummyHomeScreen3,
  DummyHomeScreen4,
  DummyWS1,
  IcApartment,
  IcCities,
  IcHotel,
  IcHouse,
  IcTraveler,
  IcTreasure,
} from '../../assets';
import {categories} from '../../data/Category';
import CategoriesSection from './components/CategoriesSection';

const HomeScreen = () => {
  const {id, categories_name} = categories;

  const renderDataStatistic = ({icon, total, title}) => {
    return (
      <View style={{alignItems: 'center'}}>
        {icon}
        <Space height={4} />
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            color: COLORS.primary2,
            fontSize: 12,
          }}>
          {total}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: COLORS.primary2,
            fontSize: 12,
            marginTop: -6,
          }}>
          {title}
        </Text>
      </View>
    );
  };

  const renderMenuCategories = ({icon, title}) => {
    return (
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            borderColor: COLORS.gray,
            borderWidth: 1.5,
            borderRadius: 8,
            width: 72,
            paddingVertical: 8,
            alignItems: 'center',
            marginBottom: 8,
          }}>
          {icon}
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: COLORS.primary2,
            fontSize: 12,
          }}>
          {title}
        </Text>
      </View>
    );
  };

  const renderContentBar = ({title}) => {
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

      <View
        style={{
          marginHorizontal: 60,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {renderDataStatistic({
          icon: <IcTraveler />,
          total: '80.409',
          title: 'travelers',
        })}

        {renderDataStatistic({
          icon: <IcTreasure />,
          total: '862',
          title: 'treasure',
        })}

        {renderDataStatistic({
          icon: <IcCities />,
          total: '1.492',
          title: 'cities',
        })}
      </View>

      <Space height={24} />

      <ScrollView>
        {renderContentBar({title: 'Categories'})}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 24,
          }}>
          {categories.map((item, index) => {
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

        <View
          style={{
            backgroundColor: COLORS.gray,
            height: 1.5,
            marginHorizontal: 24,
            marginTop: 16,
          }}
        />

        <Space height={20} />

        {renderContentBar({title: 'Most Picked'})}

        <View style={{marginHorizontal: 24}}>
          <VacationCard
            dummyImg={DummyHomeScreen1}
            price="1.200.500"
            titleName="Red Line"
            type="big-card"
            bigImgType
            subtitle="Gorosei and Ternyubito"
          />

          <VacationCard
            dummyImg={DummyHomeScreen2}
            price="1.200.500"
            titleName="Red Line"
            type="big-card"
            bigImgType
            subtitle="Gorosei and Ternyubito"
          />

          <VacationCard
            dummyImg={DummyHomeScreen3}
            price="1.200.500"
            titleName="Red Line"
            type="big-card"
            bigImgType
            subtitle="Gorosei and Ternyubito"
          />

          <VacationCard
            dummyImg={DummyHomeScreen4}
            price="1.200.500"
            titleName="Red Line"
            type="big-card"
            bigImgType
            subtitle="Gorosei and Ternyubito"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
