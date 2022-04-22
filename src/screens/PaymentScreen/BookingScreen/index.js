import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Header, ItemValue, Space} from '../../../components';
import {DummyDetailScreen} from '../../../assets';
import Divider from '../../../components/molecules/Divider';
import {COLORS} from '../../../constants';

const BookingScreen = () => {
  return (
    <View>
      <Header title="Booking Information" type="onback-payment" noStepper="1" />
      <Space height={24} />
      <View style={{paddingHorizontal: 24}}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: COLORS.primary2,
            marginBottom: 8,
          }}>
          Item Booking
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={DummyDetailScreen}
            style={{height: 66, width: 66, borderRadius: 8}}
          />
          <View style={{marginLeft: 12, flex: 1}}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: COLORS.primary2,
                fontSize: 16,
              }}>
              Ocean Land
            </Text>
            <Text style={{fontFamily: 'Poppins-Regular', color: COLORS.gray}}>
              14.200.000 IDR
            </Text>
            <Text style={{fontFamily: 'Poppins-Regular', color: COLORS.gray}}>
              20 Jan - 22 Jan
            </Text>
          </View>
          <Text style={{fontFamily: 'Poppins-Regular', color: COLORS.gray}}>
            2 nights
          </Text>
        </View>

        <Divider marginBottom={20} marginTop={20} />

        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: COLORS.primary2,
            marginBottom: 8,
          }}>
          Details Transaction
        </Text>
        <ItemValue label={'Sub Total:'} value={'14.200.000 IDR'} />
      </View>
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({});
