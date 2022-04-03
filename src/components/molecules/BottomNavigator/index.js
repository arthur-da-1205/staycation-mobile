import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../constants';

const BottomIcon = ({label, focus}) => {
  switch (label) {
    case 'Explore':
      return focus ? (
        <View style={styles.containerActive}>
          <IconMC name="compass" size={25} color={COLORS.primary} />
          <Text style={styles.textActive}>Explore</Text>
        </View>
      ) : (
        <View style={styles.containerInActive}>
          <IconMC name="compass" size={25} color={COLORS.primary2} />
          <Text style={styles.textInActive}>Explore</Text>
        </View>
      );
    case 'Trips':
      return focus ? (
        <View style={styles.containerActive}>
          <IconMC name="wallet-travel" size={25} color={COLORS.primary} />
          <Text style={styles.textActive}>Trips</Text>
        </View>
      ) : (
        <View style={styles.containerInActive}>
          <IconMC name="wallet-travel" size={25} color={COLORS.primary2} />
          <Text style={styles.textInActive}>Trips</Text>
        </View>
      );
    case 'Saved':
      return focus ? (
        <View style={styles.containerActive}>
          <IconMC name="cards-heart" size={25} color={COLORS.primary} />
          <Text style={styles.textActive}>Saved</Text>
        </View>
      ) : (
        <View style={styles.containerInActive}>
          <IconMC name="cards-heart" size={25} color={COLORS.primary2} />
          <Text style={styles.textInActive}>Saved</Text>
        </View>
      );
    case 'Profile':
      return focus ? (
        <View style={styles.containerActive}>
          <IconMC name="account" size={25} color={COLORS.primary} />
          <Text style={styles.textActive}>Profile</Text>
        </View>
      ) : (
        <View style={styles.containerInActive}>
          <IconMC name="account" size={25} color={COLORS.primary2} />
          <Text style={styles.textInActive}>Profile</Text>
        </View>
      );
    default:
      return null;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.bottomTabContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.bottomTabBtn}>
            <BottomIcon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  containerActive: {alignItems: 'center'},
  textActive: {color: COLORS.primary2},
  containerInActive: {alignItems: 'center'},
  textInActive: {color: COLORS.primary2},
  bottomTabContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  bottomTabBtn: {flex: 1, alignItems: 'center'},
});
