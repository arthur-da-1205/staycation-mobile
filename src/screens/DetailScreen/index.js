import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  DummyDetailScreen,
  IcAc,
  IcBathroom,
  IcBedroom,
  IcCalendar,
  IcDiningRoom,
  IcFavourite,
  IcKulkas,
  IcLivingRoom,
  IcStar,
  IcTv,
  IcWifi,
  OnBack,
} from '../../assets';
import {COLORS, DIMENSIONS} from '../../constants';
import {Button, Space} from '../../components';
import Divider from '../../components/molecules/Divider';

const Features = ({iconFeatures, value, featureName}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        marginHorizontal: 6,
      }}>
      <Image source={iconFeatures} style={{height: 32, width: 32}} />
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: COLORS.primary2,
          fontSize: 12,
        }}>
        {value}{' '}
        <Text style={{fontFamily: 'Poppins-Light', color: COLORS.gray}}>
          {featureName}
        </Text>
      </Text>
    </View>
  );
};

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

      <View style={{paddingHorizontal: 24}}>
        <View
          style={{
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

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: COLORS.primary2,
              padding: 8,
              borderRadius: 4,
            }}>
            <IcCalendar />
          </View>
          <View
            style={{
              backgroundColor: COLORS.lightGray,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: COLORS.primary2,
                fontSize: 16,
              }}>
              20 Jan - 22 Jan
            </Text>
          </View>
        </View>

        <Divider marginBottom={20} marginTop={20} />

        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: -6,
              }}>
              <Features
                iconFeatures={IcBedroom}
                value="5"
                featureName={'bedroom'}
              />
              <Features
                iconFeatures={IcLivingRoom}
                value="1"
                featureName={'living room'}
              />
              <Features
                iconFeatures={IcBathroom}
                value="3"
                featureName={'bathroom'}
              />
              <Features
                iconFeatures={IcDiningRoom}
                value="1"
                featureName={'dining room'}
              />
              <Features
                iconFeatures={IcWifi}
                value="10"
                featureName={'mbp/s'}
              />
              <Features
                iconFeatures={IcAc}
                value="7"
                featureName={'unit ready'}
              />
              <Features
                iconFeatures={IcKulkas}
                value="2"
                featureName={'refigrator'}
              />
              <Features
                iconFeatures={IcTv}
                value="4"
                featureName={'television'}
              />
            </View>
          </ScrollView>
        </View>

        <View style={{marginTop: 20, marginBottom: 12}}>
          <Divider marginBottom={20} marginTop={20} />
          <View
            style={{marginTop: -35, alignItems: 'flex-end', marginRight: 20}}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                backgroundColor: COLORS.primary,
                borderRadius: 8,
                paddingVertical: 4,
                width: 130,
                alignItems: 'center',
              }}>
              <Text style={{fontFamily: 'Poppins-Medium', color: COLORS.white}}>
                See more
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View
            style={{
              paddingRight: 20,
              paddingLeft: 176,
              marginTop: -36,
            }}>
            <Button labelBtn="See more" btnHeight={4} />
          </View> */}
        </View>

        <Text>djfdfjkjj jjbbjhb jhh</Text>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
