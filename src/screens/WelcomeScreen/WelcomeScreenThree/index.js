import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Button, Header, Space} from '../../../components';
import {COLORS, DIMENSIONS} from '../../../constants';
import {DummyWS1, DummyWS2, DummyWS3, DummyWS4} from '../../../assets';

const WelcomeScreenThree = () => {
  const renderFrame = ({dummyImg, price, titleName, fontSize, styleFrame}) => {
    return (
      <ImageBackground source={dummyImg} style={styleFrame}>
        <View style={styles.containerFrame}>
          <View style={styles.frame}>
            <Text style={styles.textPrice}>{price} IDR</Text>
          </View>
        </View>

        <View style={styles.containerText}>
          <Text style={styles.titleName(fontSize)}>{titleName}</Text>
        </View>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.page}>
      <Header title="Find best deals" type="onBack" />
      <Space height={24} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            {renderFrame({
              dummyImg: DummyWS1,
              titleName: 'Ocean Land',
              price: '31.610.001',
              fontSize: 18,
              styleFrame: styles.bigImg,
            })}
          </View>

          <Space height={20} />

          <View style={styles.containerSmallImg}>
            {renderFrame({
              titleName: 'Laugh Tale',
              price: '99.999.999',
              dummyImg: DummyWS2,
              styleFrame: styles.SmallImg,
            })}

            {renderFrame({
              titleName: 'All Blue',
              price: '33.000.000',
              dummyImg: DummyWS3,
              styleFrame: styles.SmallImg,
            })}
          </View>

          <Space height={20} />

          <View>
            {renderFrame({
              dummyImg: DummyWS4,
              titleName: 'Green Land',
              price: '32.000.000',
              fontSize: 18,
              styleFrame: styles.bigImg,
            })}
          </View>

          <Space height={24} />
          <Button labelBtn="Get Started" />
          <Space height={26} />
        </View>
      </ScrollView>
    </View>
  );
};

export default WelcomeScreenThree;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: COLORS.white},
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  bigImg: {
    height: (DIMENSIONS.widthScreen - 48) / 2.08,
    aspectRatio: 2.08 / 1,
  },
  containerSmallImg: {flexDirection: 'row', justifyContent: 'space-between'},
  SmallImg: {
    height: (DIMENSIONS.widthScreen - 48 - 12) / 2,
    width: (DIMENSIONS.widthScreen - 48 - 12) / 2,
  },
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
  titleName: fontSize => ({
    color: COLORS.white,
    fontFamily: 'Poppins-Medium',
    fontSize: fontSize,
  }),
});
