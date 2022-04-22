import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button, Header, ItemValue, Space} from '../../../components';
import {DummyDetailScreen} from '../../../assets';
import Divider from '../../../components/molecules/Divider';
import {COLORS} from '../../../constants';
import {useNavigation} from '@react-navigation/native';

const BookingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <Header title="Booking Information" type="onback-payment" noStepper="1" />
      <Space height={24} />

      <View style={styles.container}>
        <Text style={styles.textLabel}>Item Booking</Text>
        <View style={styles.itemBookingContent}>
          <Image source={DummyDetailScreen} style={styles.image} />
          <View style={styles.subItemBookingContent}>
            <Text style={styles.textTitle}>Ocean Land</Text>
            <Text style={styles.text}>14.200.000 IDR</Text>
            <Text style={styles.text}>20 Jan - 22 Jan</Text>
          </View>
          <Text style={styles.text}>2 nights</Text>
        </View>

        <Divider marginBottom={20} marginTop={20} />

        <Text style={styles.textLabel}>Details Transaction</Text>
        <ItemValue label={'Sub Total :'} value={'14.200.000 IDR'} />
        <ItemValue label={'Tax 10% :'} value={'1.420.000 IDR'} />
        <ItemValue
          label={'Total Price:'}
          value={'15.220.000 IDR'}
          valueColor={COLORS.green}
        />

        <Divider marginBottom={20} marginTop={20} />

        <Text style={styles.textLabel}>Info</Text>
        <ItemValue label="Name :" value={'John Doe'} />
        <ItemValue label="Phone No :" value={'081234567890'} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          labelBtn="Continue to Book"
          onPress={() => navigation.navigate('TransferBankScreen')}
        />
      </View>
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: COLORS.white},
  container: {paddingHorizontal: 24, flex: 1},
  textLabel: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.primary2,
    marginBottom: 8,
  },
  itemBookingContent: {flexDirection: 'row', alignItems: 'center'},
  image: {height: 66, width: 66, borderRadius: 8},
  subItemBookingContent: {marginLeft: 12, flex: 1},
  textTitle: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.primary2,
    fontSize: 16,
  },
  text: {fontFamily: 'Poppins-Regular', color: COLORS.gray},
  buttonContainer: {paddingHorizontal: 24, marginBottom: 24},
});
