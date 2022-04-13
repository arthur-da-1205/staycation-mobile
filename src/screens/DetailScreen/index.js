import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {DummyDetailScreen, IcFavourite, IcStar, OnBack} from '../../assets';
import {COLORS} from '../../constants';
import {Space} from '../../components';
import Divider from '../../components/molecules/Divider';

const DetailScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <ImageBackground source={DummyDetailScreen} style={{height: 300}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 24,
              marginTop: 16,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                paddingHorizontal: 8,
                paddingVertical: 6,
                marginLeft: -8,
              }}
              activeOpacity={0.5}>
              <OnBack />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                backgroundColor: COLORS.lightGray,
                padding: 6,
                borderRadius: 32,
                marginRight: -6,
              }}>
              <IcFavourite />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: COLORS.white,
            paddingVertical: 8,
            marginHorizontal: 44,
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: COLORS.primary2,
              fontSize: 24,
              lineHeight: 36,
            }}>
            Ocean Land
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: COLORS.primary2,
              lineHeight: 21,
            }}>
            Bandung, Indonesia
          </Text>
        </View>
      </ImageBackground>

      <View
        style={{
          paddingHorizontal: 24,
          marginTop: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: COLORS.primary2,
              fontSize: 19,
              lineHeight: 30,
            }}>
            14.200.000 IDR
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IcStar />
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                color: COLORS.primary2,
                marginLeft: 4,
                lineHeight: 20,
                top: 2,
              }}>
              4.2
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: COLORS.red,
              height: 32,
              width: 32,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 24,
                color: COLORS.white,
                lineHeight: 33,
              }}>
              -
            </Text>
          </View>

          <View
            style={{
              backgroundColor: COLORS.lightGray,
              height: 32,
              width: 84,
              paddingHorizontal: 6,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{fontFamily: 'Poppins-Regular', color: COLORS.primary2}}>
              2 nights
            </Text>
          </View>

          <View
            style={{
              backgroundColor: COLORS.green,
              height: 32,
              width: 32,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 24,
                color: COLORS.white,
                lineHeight: 33,
              }}>
              +
            </Text>
          </View>
        </View>
      </View>

      <Divider marginTop={20} marginBottom={20} />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
