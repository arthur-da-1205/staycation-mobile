import {StyleSheet, Text, useWindowDimensions, ScrollView} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {COLORS} from '../../../constants';
import ItemListTrips from '../ItemListTrips';
import {Space} from '../../atom';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStyle}
    style={styles.tabBarStyle}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text style={styles.textTabBar(focused)}>{route.title}</Text>
    )}
  />
);

const Progress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Space height={16} />
      <ItemListTrips
        type={'progress'}
        onPress={() => navigation.navigate('BookingOrderScreen')}
      />
      <ItemListTrips type={'progress'} />
      <ItemListTrips type={'progress'} />
    </ScrollView>
  );
};

const PastTrips = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Space height={16} />
      <ItemListTrips
        type={'past-trips'}
        onPress={() => navigation.navigate('BookingOrderScreen')}
      />
      <ItemListTrips type={'past-trips'} />
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: Progress,
  2: PastTrips,
});

const TripsTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Progress'},
    {key: '2', title: 'Past Trips'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default TripsTabSection;

const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: COLORS.primary2,
    height: 3,
  },
  tabBarStyle: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 1,
  },
  textTabBar: focused => ({
    fontFamily: 'Poppins-Medium',
    color: focused ? COLORS.primary2 : COLORS.gray,
  }),
});
