import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, InputField, Space} from '../../components';
import {COLORS} from '../../constants';

const EditProfileScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header title="Edit Profile" type="onBack" />

      <View style={{paddingHorizontal: 24, marginTop: 24}}>
        <InputField label={'Name'} placeholder="Type your name" />
        <Space height={20} />
        <InputField label={'Phone'} placeholder="Type your phone" />
        <Space height={20} />
        <InputField label={'Address'} placeholder="Type your address" />
        <Space height={24} />
        <Button labelBtn="Save" />
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({});
