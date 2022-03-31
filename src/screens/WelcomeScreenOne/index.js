import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {Header, Space} from '../../components';
import {
  CarouselOne,
  OnNext,
  WelcomeImg1,
  WelcomeImg2,
  WelcomeImg3,
} from '../../assets';

const WelcomeScreenOne = () => {
  return (
    <View style={styles.page}>
      <Header title={'Forget busy work, start next vacation'} />
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginVertical: 28}}>
          <Space width={18} />
          <Image
            source={WelcomeImg1}
            style={{
              height: 250,
              width: 148,
              marginHorizontal: 6,
            }}
          />
          <Image
            source={WelcomeImg2}
            style={{
              height: 250,
              width: 148,
              marginHorizontal: 6,
            }}
          />
          <Image
            source={WelcomeImg3}
            style={{
              height: 250,
              width: 148,
              marginHorizontal: 6,
            }}
          />
          <Space width={18} />
        </ScrollView>
      </View>
      <View
        style={{
          paddingHorizontal: 24,
          flex: 1,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Poppins-Regular',
            color: COLORS.gray,
            lineHeight: 24,
          }}>
          We provide what you need to enjoy your holiday with family. Time to
          make another memorable moments.
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 24,
          marginBottom: 24,
        }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            width: 4,
            height: 4,
            opacity: 0,
          }}
        />
        <View style={{marginLeft: 16}}>
          <CarouselOne />
        </View>
        <TouchableOpacity
          style={{
            paddingLeft: 16,
            paddingVertical: 6,
          }}>
          <OnNext />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreenOne;

const styles = StyleSheet.create({
  page: {backgroundColor: COLORS.white, flex: 1},
});
