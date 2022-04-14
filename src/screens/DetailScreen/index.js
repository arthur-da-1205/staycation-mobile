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
  DummyGallery1,
  DummyGallery2,
  DummyGallery3,
  DummyGallery4,
  DummyGallery5,
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

const ImageGallery = ({image}) => {
  const height = DIMENSIONS.widthScreen / 3.8;
  return (
    <Image
      source={image}
      style={{
        height: height,
        width: height * 1.22,
        borderRadius: 8,
        marginHorizontal: 6,
      }}
    />
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

      <ScrollView style={{paddingHorizontal: 24}}>
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
            <View
              style={{
                width: 130,
              }}>
              <Button labelBtn="See more" btnHeight={4} fontSize={14} />
            </View>
          </View>
        </View>

        <View>
          <Text style={{fontFamily: 'Poppins-Medium', color: COLORS.primary2}}>
            Overview
          </Text>
          <Space height={12} />
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: COLORS.gray,
              textAlign: 'justify',
            }}>
            Minimal techno is a minimalist subgenre of techno music. It is
            characterized by a stripped-down aesthetic that exploits the use of
            repetition and understated development. Minimal techno is thought to
            have been originally developed in the early 1990s by Detroit-based
            producers Robert Hood and Daniel Bell.
          </Text>
          <Space height={12} />
          <Text style={{fontFamily: 'Poppins-Medium', color: COLORS.primary2}}>
            Gallery
          </Text>
          <Space height={12} />

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row', marginHorizontal: -6}}>
              <ImageGallery image={DummyGallery1} />
              <ImageGallery image={DummyGallery2} />
              <ImageGallery image={DummyGallery3} />
              <ImageGallery image={DummyGallery4} />
              <ImageGallery image={DummyGallery5} />
            </View>
          </ScrollView>

          <Space height={24} />

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: COLORS.gray,
                  fontSize: 13,
                  lineHeight: 16,
                }}>
                You will pay :
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Bold',
                  color: COLORS.primary2,
                  fontSize: 16,
                  lineHeight: 24,
                }}>
                14.200.000 IDR /
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: COLORS.gray,
                  fontSize: 13,
                  lineHeight: 16,
                }}>
                2 nights
              </Text>
            </View>

            <View style={{width: DIMENSIONS.widthScreen / 2.3}}>
              <Button labelBtn="Book Now" />
            </View>
          </View>

          <Space height={16} />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
