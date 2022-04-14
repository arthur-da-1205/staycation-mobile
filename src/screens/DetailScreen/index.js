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
    <View style={styles.feature}>
      <Image source={iconFeatures} style={styles.iconFeatures} />
      <Text style={styles.textValue}>
        {value} <Text style={styles.textFeatureName}>{featureName}</Text>
      </Text>
    </View>
  );
};

const ImageGallery = ({image}) => {
  const height = DIMENSIONS.widthScreen / 3.8;
  return <Image source={image} style={styles.imageGallery(height)} />;
};

const DetailScreen = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={DummyDetailScreen} style={styles.imgHeight}>
        <View style={styles.headerFlex}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.onBack} activeOpacity={0.5}>
              <OnBack />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.5} style={styles.icFavourite}>
              <IcFavourite />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.frameBar}>
          <Text style={styles.titleBar}>Ocean Land</Text>
          <Text style={styles.subTitleBar}>Bandung, Indonesia</Text>
        </View>
      </ImageBackground>

      <ScrollView style={styles.container}>
        <View style={styles.bookingContainer}>
          <View>
            <Text style={styles.textPrice}>14.200.000 IDR</Text>
            <View style={styles.ratingContainer}>
              <IcStar />
              <Text style={styles.textRating}>4.2</Text>
            </View>
          </View>

          <View style={styles.counterContainer}>
            <View style={styles.minusButton}>
              <Text style={styles.textCounter}>-</Text>
            </View>

            <View style={styles.valueBookingContainer}>
              <Text style={styles.textValueBooking}>2 nights</Text>
            </View>

            <View style={styles.plusButton}>
              <Text style={styles.textCounter}>+</Text>
            </View>
          </View>
        </View>

        <Divider marginTop={20} marginBottom={20} />

        <View style={styles.calenderContainer}>
          <View style={styles.icCalendar}>
            <IcCalendar />
          </View>

          <View style={styles.dateContainer}>
            <Text style={styles.textDate}>20 Jan - 22 Jan</Text>
          </View>
        </View>

        <Divider marginBottom={20} marginTop={20} />

        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.featuresContainer}>
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

        <View style={styles.seemoreContainer}>
          <Divider marginBottom={20} marginTop={20} />

          <View style={styles.seemoreButton}>
            <View style={styles.seemoreWidth}>
              <Button labelBtn="See more" btnHeight={4} fontSize={14} />
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.textTitle}>Overview</Text>
          <Space height={12} />
          <Text style={styles.textDesc}>
            Minimal techno is a minimalist subgenre of techno music. It is
            characterized by a stripped-down aesthetic that exploits the use of
            repetition and understated development. Minimal techno is thought to
            have been originally developed in the early 1990s by Detroit-based
            producers Robert Hood and Daniel Bell.
          </Text>

          <Space height={12} />
          <Text style={styles.textTitle}>Gallery</Text>
          <Space height={12} />

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.galleryContainer}>
              <ImageGallery image={DummyGallery1} />
              <ImageGallery image={DummyGallery2} />
              <ImageGallery image={DummyGallery3} />
              <ImageGallery image={DummyGallery4} />
              <ImageGallery image={DummyGallery5} />
            </View>
          </ScrollView>

          <Space height={24} />

          <View style={styles.footerContainer}>
            <View style={styles.footerFlex}>
              <Text style={styles.textFooter}>You will pay :</Text>
              <Text style={styles.textPriceFooter}>14.200.000 IDR /</Text>
              <Text style={styles.textFooter}>2 nights</Text>
            </View>

            <View style={styles.bookButtonWidth}>
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

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: COLORS.white},
  imgHeight: {height: 300},
  headerFlex: {flex: 1},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 16,
    alignItems: 'center',
  },
  onBack: {paddingHorizontal: 8, paddingVertical: 6, marginLeft: -8},
  icFavourite: {
    backgroundColor: COLORS.lightGray,
    padding: 6,
    borderRadius: 32,
    marginRight: -6,
  },
  frameBar: {
    backgroundColor: COLORS.white,
    paddingVertical: 8,
    marginHorizontal: 44,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    alignItems: 'center',
  },
  titleBar: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.primary2,
    fontSize: 24,
    lineHeight: 36,
  },
  subTitleBar: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.primary2,
    lineHeight: 21,
  },
  container: {paddingHorizontal: 24},
  bookingContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textPrice: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.primary2,
    fontSize: 19,
    lineHeight: 30,
  },
  ratingContainer: {flexDirection: 'row', alignItems: 'center'},
  textRating: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: COLORS.primary2,
    marginLeft: 4,
    lineHeight: 20,
    top: 2,
  },
  counterContainer: {flexDirection: 'row'},
  minusButton: {
    backgroundColor: COLORS.red,
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  textCounter: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: COLORS.white,
    lineHeight: 33,
  },
  valueBookingContainer: {
    backgroundColor: COLORS.lightGray,
    height: 32,
    width: 84,
    paddingHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textValueBooking: {fontFamily: 'Poppins-Regular', color: COLORS.primary2},
  plusButton: {
    backgroundColor: COLORS.green,
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  calenderContainer: {flexDirection: 'row'},
  icCalendar: {
    backgroundColor: COLORS.primary2,
    padding: 8,
    borderRadius: 4,
  },
  dateContainer: {
    backgroundColor: COLORS.lightGray,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  textDate: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.primary2,
    fontSize: 16,
  },
  featuresContainer: {flexDirection: 'row', marginHorizontal: -6},
  feature: {alignItems: 'center', marginHorizontal: 6},
  iconFeatures: {height: 32, width: 32},
  textValue: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.primary2,
    fontSize: 12,
  },
  textFeatureName: {fontFamily: 'Poppins-Light', color: COLORS.gray},
  seemoreContainer: {marginTop: 20, marginBottom: 12},
  seemoreButton: {marginTop: -35, alignItems: 'flex-end', marginRight: 20},
  seemoreWidth: {width: 130},
  textTitle: {fontFamily: 'Poppins-Medium', color: COLORS.primary2},
  textDesc: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.gray,
    textAlign: 'justify',
  },
  galleryContainer: {flexDirection: 'row', marginHorizontal: -6},
  imageGallery: height => ({
    height: height,
    width: height * 1.22,
    borderRadius: 8,
    marginHorizontal: 6,
  }),
  footerContainer: {flexDirection: 'row', alignItems: 'center'},
  footerFlex: {flex: 1},
  textFooter: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.gray,
    fontSize: 13,
    lineHeight: 16,
  },
  textPriceFooter: {
    fontFamily: 'Poppins-Bold',
    color: COLORS.primary2,
    fontSize: 16,
    lineHeight: 24,
  },
  bookButtonWidth: {width: DIMENSIONS.widthScreen / 2.3},
});
