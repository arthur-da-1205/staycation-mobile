import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {Header, Space} from '../../components';
import {WelcomeImg1, WelcomeImg2, WelcomeImg3} from '../../assets';

const WelcomeScreenOne = () => {
  return (
    <View style={styles.page}>
      {/* <Header title={'Forget busy work, start next vacation'} /> */}
      {/* <Space height={28} /> */}
      <ScrollView
        horizontal
        //   showsHorizontalScrollIndicator={false}
        style={{flex: 1, backgroundColor: 'blue'}}>
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
      <View
        style={{
          flex: 1,
          paddingHorizontal: 24,
          backgroundColor: 'yellow',
          //   marginTop: 150,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Poppins-Regular',
            color: COLORS.gray,
          }}>
          We provide what you need to enjoy your holiday with family. Time to
          make another memorable moments.
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreenOne;

const styles = StyleSheet.create({
  page: {backgroundColor: COLORS.red, flex: 1},
});
