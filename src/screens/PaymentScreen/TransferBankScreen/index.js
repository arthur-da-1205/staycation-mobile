import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {Button, Header, InputField, Space} from '../../../components';
import {COLORS} from '../../../constants';
import {IcBankBCA, IcBankMandiri} from '../../../assets';
import Divider from '../../../components/molecules/Divider';

const ListTransfer = ({image, bankName, noRek, name}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
      }}>
      <Image source={image} style={{width: 68, height: 40}} />
      <View style={{alignItems: 'flex-end'}}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: COLORS.primary2,
          }}>
          {bankName}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: COLORS.primary2,
          }}>
          {noRek}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: COLORS.primary2,
          }}>
          {name}
        </Text>
      </View>
    </View>
  );
};

const TransferBankScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header title="Payment" type="onback-payment" noStepper="2" />
      <Space height={24} />
      <ScrollView
        style={{paddingHorizontal: 24}}
        showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            color: COLORS.primary2,
            marginBottom: 12,
          }}>
          Transfer
        </Text>

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

        <View style={{marginVertical: 24}}>
          <Button labelBtn="Continue to Book" />
        </View>
      </ScrollView>
    </View>
  );
};

export default TransferBankScreen;

const styles = StyleSheet.create({});
