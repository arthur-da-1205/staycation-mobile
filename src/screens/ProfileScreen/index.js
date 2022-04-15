import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {Button, Header, ListProfile, Space} from '../../components';
import {DummyProfile} from '../../assets';
import {COLORS} from '../../constants';

const ProfileScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header title="Profile" type="edit-profile" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 24}}>
        <View style={{alignItems: 'center', marginBottom: 26, marginTop: 24}}>
          <Image
            source={DummyProfile}
            style={{
              width: 125,
              height: 125,
              borderRadius: 125,
              marginBottom: 12,
            }}
          />
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: COLORS.primary2,
              fontSize: 16,
            }}>
            John Doe
          </Text>
          <Text style={{fontFamily: 'Poppins-Regular', color: COLORS.primary2}}>
            San Francisco, CA
          </Text>
        </View>

        <View>
          <ListProfile titleName="Username" valueName="JohnDoe" />
          <ListProfile titleName="Email" valueName="johndoe@gmail.com" />
          <ListProfile titleName="Phone" valueName="081234567891" />
          <ListProfile
            titleName="Address"
            valueName="6391 Elgin St Celina, Delaware"
          />
        </View>
        <Space height={24} />
        <Button labelBtn="Sign Out" />
        <Space height={24} />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
