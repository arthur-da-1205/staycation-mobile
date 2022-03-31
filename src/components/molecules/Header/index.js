import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import {Space} from '../../atom';
import {OnBack, EditProfile} from '../../../assets/Icon';

const Header = ({title, type, noStepper}) => {
  const renderContent = () => {
    switch (type) {
      case 'onBack':
        return (
          <>
            <TouchableOpacity activeOpacity={0.5} style={styles.onBack}>
              <OnBack />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>
          </>
        );

      case 'edit-profile':
        return (
          <>
            <View style={styles.flexEnd}>
              <TouchableOpacity activeOpacity={0.5} style={styles.editProfile}>
                <EditProfile />
              </TouchableOpacity>
            </View>
            <Text style={styles.headerTitle}>{title}</Text>
          </>
        );

      case 'onback-payment':
        return (
          <>
            <View style={styles.pageOnbackPayment}>
              <TouchableOpacity activeOpacity={0.5} style={styles.onBack}>
                <OnBack />
              </TouchableOpacity>
              <View style={styles.borderStepper}>
                <Text style={styles.textStepper}>{noStepper}/3</Text>
              </View>
            </View>
            <Text style={styles.headerTitle}>{title}</Text>
          </>
        );

      case 'payment':
        return (
          <>
            <Space height={12} />
            <View style={styles.flexEnd}>
              <View style={styles.borderStepper}>
                <Text style={styles.textStepper}>3/3</Text>
              </View>
            </View>
            <Text style={styles.headerTitle}>{title}</Text>
          </>
        );

      default:
        return (
          <View>
            <Space height={36} />
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
        );
    }
  };
  return <View>{renderContent()}</View>;
};

export default Header;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: COLORS.primary2,
    textAlign: 'center',
    paddingHorizontal: 24,
  },
  onBack: {
    padding: 12,
    marginLeft: 12,
    marginTop: 12,
    marginBottom: 8,
    width: 32,
  },
  flexEnd: {alignItems: 'flex-end'},
  editProfile: {
    padding: 6,
    marginLeft: 18,
    marginTop: 12,
    marginBottom: 8,
    marginRight: 18,
    width: 30,
  },
  pageOnbackPayment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  borderStepper: {
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 30,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
  },
  textStepper: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: COLORS.primary2,
  },
});
