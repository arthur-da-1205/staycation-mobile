import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {Button, Header, InputField, Space} from '../../../components';
import {COLORS} from '../../../constants';
import {IcBankBCA, IcBankMandiri} from '../../../assets';
import Divider from '../../../components/molecules/Divider';
import {useNavigation} from '@react-navigation/native';

const ListTransfer = ({image, bankName, noRek, name}) => {
  return (
    <View style={styles.listTransferContainer}>
      <Image source={image} style={styles.image} />
      <View style={styles.textAlign}>
        <Text style={styles.text}>{bankName}</Text>
        <Text style={styles.text}>{noRek}</Text>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

const TransferBankScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <Header title="Payment" type="onback-payment" noStepper="2" />
      <Space height={24} />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.textLabel}>Transfer</Text>
        <ListTransfer
          image={IcBankBCA}
          bankName="Bank Central Asia"
          noRek="2208 1996"
          name="BuildWith Angga"
        />

        <ListTransfer
          image={IcBankMandiri}
          bankName="Bank Mandiri"
          noRek="2208 1996"
          name="BuildWith Angga"
        />

        <Divider marginBottom={20} marginTop={20} />

        <InputField
          label={'Upload Bukti Transfer'}
          placeholder="Browse a file"
        />
        <Space height={20} />
        <InputField label={'Asal Bank'} placeholder="Please type here" />
        <Space height={20} />
        <InputField label={'Nama Pengirim'} placeholder="Please type here" />

        <View style={styles.buttonContainer}>
          <Button
            labelBtn="Continue to Book"
            onPress={() => navigation.navigate('SuccessBookingScreen')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default TransferBankScreen;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: COLORS.white},
  container: {paddingHorizontal: 24},
  textLabel: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.primary2,
    marginBottom: 12,
  },
  listTransferContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {width: 68, height: 40},
  textAlign: {alignItems: 'flex-end'},
  text: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.primary2,
  },
  buttonContainer: {marginVertical: 24},
});
