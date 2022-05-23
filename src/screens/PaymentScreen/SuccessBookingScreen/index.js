import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, Space} from '../../../components';
import {IlSuccessBooking} from '../../../assets';
import {COLORS} from '../../../constants';
import {useNavigation} from '@react-navigation/native';

const SuccessBookingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <Header title="Yay! Completed" type="payment" noStepper="3" />
      <Space height={36} />

      <View style={styles.container}>
        <IlSuccessBooking />
        <Text style={styles.text}>
          We will inform you via email later once the transaction has been
          accepted
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          labelBtn="Back to Home"
          onPress={() => navigation.navigate('MainApp')}
        />
      </View>
    </View>
  );
};

export default SuccessBookingScreen;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: COLORS.white},
  container: {paddingHorizontal: 24, alignItems: 'center', flex: 1},
  text: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.gray,
    marginTop: 24,
    textAlign: 'center',
    paddingHorizontal: 22,
  },
  buttonContainer: {paddingHorizontal: 24, marginVertical: 24},
});
