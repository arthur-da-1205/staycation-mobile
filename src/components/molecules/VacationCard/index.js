import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS} from '../../../constants';
import PropTypes from 'prop-types';
import {Space} from '../../atom';

const VacationCard = ({
  dummyImg,
  price,
  titleName,
  type,
  subtitle,
  bigImgType,
}) => {
  const renderCard = () => {
    switch (type) {
      case 'big-card':
        return (
          <>
            <ImageBackground source={dummyImg} style={styles.bigImg}>
              <View style={styles.containerFrame}>
                <View style={styles.frame}>
                  <Text style={styles.textPrice}>{price} IDR</Text>
                </View>
              </View>

              <View style={styles.containerText}>
                {bigImgType ? (
                  <>
                    <Text style={styles.titleBigImg}>{titleName}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                  </>
                ) : (
                  <Text style={styles.titleBigImg}>{titleName}</Text>
                )}
              </View>
            </ImageBackground>
            <Space height={16} />
          </>
        );

      case 'small-card':
        return (
          <>
            <ImageBackground source={dummyImg} style={styles.smallImg}>
              <View style={styles.containerFrame}>
                <View style={styles.frame}>
                  <Text style={styles.textPrice}>{price} IDR</Text>
                </View>
              </View>

              <View style={styles.containerText}>
                <Text style={styles.titleSmallImg}>{titleName}</Text>
              </View>
            </ImageBackground>
            <Space height={16} />
          </>
        );

      default:
        return <Text>Anda Belum Menentukan Type dari Card</Text>;
    }
  };
  return <View>{renderCard()}</View>;
};

export default VacationCard;

const styles = StyleSheet.create({
  containerFrame: {
    flex: 1,
    alignItems: 'flex-end',
  },
  frame: {
    height: 30,
    width: 116,
    backgroundColor: COLORS.pink,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrice: {color: COLORS.white},
  containerText: {
    marginLeft: 12,
    marginBottom: 8,
  },
  titleBigImg: {
    color: COLORS.white,
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
  subtitle: {
    color: COLORS.white,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  titleSmallImg: {
    color: COLORS.white,
    fontFamily: 'Poppins-Medium',
  },
  bigImg: {
    height: (DIMENSIONS.widthScreen - 48) / 2.08,
    aspectRatio: 2.08 / 1,
  },
  smallImg: {
    height: (DIMENSIONS.widthScreen - 48 - 12) / 2,
    width: (DIMENSIONS.widthScreen - 48 - 12) / 2,
  },
});

VacationCard.propTypes = {
  dummyImg: PropTypes.any.isRequired,
  price: PropTypes.string.isRequired,
  titleName: PropTypes.string.isRequired,
  type: PropTypes.string,
  subtitle: PropTypes.string,
};
