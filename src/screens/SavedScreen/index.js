import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {EmptyFavourite} from '../../components';
import {COLORS} from '../../constants';

const SavedScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <EmptyFavourite />
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({});
