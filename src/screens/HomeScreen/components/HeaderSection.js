import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';

const HeaderSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title1}>
          Stay
          <Text style={styles.title2}>cation.</Text>
        </Text>
        <Text style={styles.subtitle}>Let’s find best place</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.nameText}>John Doe</Text>
      </View>
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginHorizontal: 24,
  },
  titleContainer: {flex: 1.2},
  title1: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.primary,
    fontSize: 22,
  },
  title2: {color: COLORS.primary2},
  subtitle: {fontFamily: 'Poppins-Regular', color: COLORS.gray},
  nameContainer: {
    backgroundColor: COLORS.lightGray,
    flex: 1,
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 8,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 8,
  },
  welcomeText: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.primary2,
    fontSize: 12,
  },
  nameText: {
    fontFamily: 'Poppins-Medium',
    color: COLORS.primary2,
    fontSize: 18,
  },
});
