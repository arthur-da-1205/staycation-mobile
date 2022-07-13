import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import PropTypes from 'prop-types';

const ListProfile = ({titleName, valueName}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 16,
        paddingTop: 4,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 1,
        marginBottom: 16,
      }}>
      <Text style={{fontFamily: 'Poppins-Regular', color: COLORS.primary2}}>
        {titleName}
      </Text>
      <Text style={{fontFamily: 'Poppins-Regular', color: COLORS.primary2}}>
        {valueName}
      </Text>
    </View>
  );
};

export default ListProfile;

const styles = StyleSheet.create({});

ListProfile.propTypes = {
  titleName: PropTypes.string.isRequired,
  valueName: PropTypes.string,
};
