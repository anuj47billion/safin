import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = props => {
  const {navigation, title} = props;
  return (
    <View style={styles.container}>
      <View style={styles.parentView}>
        <View style={styles.iconView}>
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}>
            <FontAwesome name="bars" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.iconView}>
          <MaterialCommunityIcons name="bell-outline" style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 0.09,
    backgroundColor: '#fff',
    elevation: 4,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  parentView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconView: {
    flex: 0.2,
  },
  titleView: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
  },
  icon: {
    padding: 10,
    marginLeft: 10,
    fontSize: 25,
  },
});
