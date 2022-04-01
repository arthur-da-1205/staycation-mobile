import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Header} from '../../../components';
import {CarouselTwo, ImgWelcomeScreen2, OnNext} from '../../../assets';
import {COLORS} from '../../../constants';

const WelcomeScreenTwo = () => {
  return (
    <View style={styles.page}>
      <Header title="Find best place for your journey" />
      <View style={styles.containerImg}>
        <Image source={ImgWelcomeScreen2} style={styles.img} />
      </View>

      <View style={styles.containerText}>
        <Text style={styles.text}>
          We’re happy to share our best tips for destinations where you can
          relax. But you find the nicest city trips as well!
        </Text>
      </View>

      <View style={styles.containerNextScreen}>
        <View style={styles.dummyImg} />
        <View style={{marginLeft: 16}}>
          <CarouselTwo />
        </View>
        <TouchableOpacity style={styles.paddingNextScreen}>
          <OnNext />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreenTwo;

const styles = StyleSheet.create({
  page: {flex: 1},
  containerImg: {marginVertical: 34},
  img: {height: 170, width: 375},
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
