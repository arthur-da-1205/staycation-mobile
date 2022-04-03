import {View, Text, Image} from 'react-native';
import React from 'react';
import {StartIlus} from '../../assets';
import {COLORS} from '../../constants';
import {Button, Space} from '../../components';

const StartScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: 50,
      }}>
      <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 28, color: COLORS.title}}>
          Plan your trips
        </Text>
        <Text style={{fontSize: 16, color: COLORS.gray}}>
          Connect with other travellers
        </Text>
      </View>
      <View style={{flex: 4, alignItems: 'center'}}>
        <Image source={StartIlus} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -140,
          paddingHorizontal: 24,
        }}>
        <Button
          btnColor={COLORS.primary}
          labelBtn="Log in"
          btnHeight={14}
          fontSize={16}
          onPress={() => navigation.navigate('SignInScreen')}
        />
        <Space height={20} />
        <Button
          btnColor={COLORS.white}
          labelBtn="Create account"
          textColor={COLORS.primary2}
          btnHeight={14}
          borderBtn={1}
          borderColor={COLORS.primary2}
        />
      </View>
    </View>
  );
};

export default StartScreen;
