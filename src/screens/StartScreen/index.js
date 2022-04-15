import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {StartIlus} from '../../assets';
import {COLORS, DIMENSIONS} from '../../constants';
import {Button, Space} from '../../components';

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Plan your trips</Text>
        <Text style={styles.subTitle}>Connect with other travellers</Text>
      </View>

      <Image source={StartIlus} style={styles.image} />

      <View style={styles.buttonContainer}>
        <Button
          btnColor={COLORS.primary}
          labelBtn="Log in"
          btnHeight={14}
          onPress={() => navigation.navigate('SignInScreen')}
        />
        <Space height={20} />
        <Button
          btnColor={COLORS.white}
          labelBtn="Create account"
          textColor={COLORS.primary2}
          btnHeight={14}
          borderBtn={1.5}
          borderColor={COLORS.primary2}
          onPress={() => navigation.navigate('SignUpScreen')}
        />
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 36,
  },
  headerContainer: {alignItems: 'center'},
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: COLORS.primary2,
  },
  subTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: COLORS.gray,
  },
  image: {
    width: DIMENSIONS.widthScreen,
    height: DIMENSIONS.heightScreen / 1.8,
  },
  buttonContainer: {
    marginTop: -40,
    paddingHorizontal: 24,
  },
});
