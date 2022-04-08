import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Header, Space, VacationCard} from '../../../components';
import {COLORS} from '../../../constants';
import {DummyWS1, DummyWS2, DummyWS3, DummyWS4} from '../../../assets';

const WelcomeScreenThree = () => {
  return (
    <View style={styles.page}>
      <Header title="Find best deals" type="onBack" />
      <Space height={24} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <VacationCard
            dummyImg={DummyWS1}
            titleName="Ocean Land"
            price={'31.610.001'}
            type="big-card"
          />

          <View style={styles.containerSmallImg}>
            <VacationCard
              dummyImg={DummyWS2}
              titleName="Ocean Land"
              price={'31.610.001'}
              type="small-card"
            />
            <VacationCard
              dummyImg={DummyWS3}
              titleName="Ocean Land"
              price={'31.610.001'}
              type="small-card"
            />
          </View>

          <VacationCard
            dummyImg={DummyWS4}
            titleName="Ocean Land"
            price={'31.610.001'}
            type="big-card"
          />

          <Space height={8} />
          <Button labelBtn="Get Started" />
          <Space height={24} />
        </View>
      </ScrollView>
    </View>
  );
};

export default WelcomeScreenThree;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: COLORS.white},
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  containerSmallImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
