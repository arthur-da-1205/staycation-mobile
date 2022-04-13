import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {StaycationSplash} from '../../assets';
import {COLORS} from '../../constants';
import {Space} from '../../components';

const SpalshScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'StartScreen'}]});
    }, 2000);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StaycationSplash />
      <Space height={30} />
      <Text style={{fontSize: 32, color: COLORS.white}}>Staycation.</Text>
    </View>
  );
};

export default SpalshScreen;
