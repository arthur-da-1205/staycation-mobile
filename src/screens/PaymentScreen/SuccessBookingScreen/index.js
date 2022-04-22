import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, Space} from '../../../components';
import {IlSuccessBooking} from '../../../assets';
import {COLORS} from '../../../constants';
import {useNavigation} from '@react-navigation/native';

const SuccessBookingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header title="Yay! Completed" type="payment" noStepper="3" />
      <Space height={36} />
      <View style={{paddingHorizontal: 24, alignItems: 'center', flex: 1}}>
        <IlSuccessBooking />
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: COLORS.gray,
            marginTop: 24,
            textAlign: 'center',
            paddingHorizontal: 22,
          }}>
          We will inform you via email later once the transaction has been
          accepted
        </Text>
      </View>

      <View style={{paddingHorizontal: 24, marginVertical: 24}}>
        <Button
          labelBtn="Back to Home"
          onPress={() => navigation.navigate('MainApp')}
        />
      </View>
    </View>
  );
};

export default SuccessBookingScreen;

const styles = StyleSheet.create({});
