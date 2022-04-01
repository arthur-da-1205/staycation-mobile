import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import {Header, Space} from '../../../components';
import {
  CarouselOne,
  OnNext,
  WelcomeImg1,
  WelcomeImg2,
  WelcomeImg3,
} from '../../../assets';

const WelcomeScreenOne = () => {
  return (
    <View style={styles.page}>
      <Header title={'Forget busy work, start next vacation'} />
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.containerImg}>
          <Space width={18} />
          <Image source={WelcomeImg1} style={styles.img} />
          <Image source={WelcomeImg2} style={styles.img} />
          <Image source={WelcomeImg3} style={styles.img} />
          <Space width={18} />
        </ScrollView>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.text}>
          We provide what you need to enjoy your holiday with family. Time to
          make another memorable moments.
        </Text>
      </View>

      <View style={styles.containerNextScreen}>
        <View style={styles.dummyImg} />
        <View style={{marginLeft: 16}}>
          <CarouselOne />
        </View>
        <TouchableOpacity style={styles.paddingNextScreen}>
          <OnNext />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreenOne;

const styles = StyleSheet.create({
  page: {backgroundColor: COLORS.white, flex: 1},
  containerImg: {marginVertical: 28},
  img: {
    height: 250,
    width: 148,
    marginHorizontal: 6,
  },
  containerText: {
    paddingHorizontal: 24,
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: COLORS.gray,
    lineHeight: 24,
  },
  containerNextScreen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 24,
  },
  dummyImg: {
    backgroundColor: COLORS.white,
    width: 4,
    height: 4,
    opacity: 0,
  },
  paddingNextScreen: {
    paddingLeft: 16,
    paddingVertical: 6,
  },
});
