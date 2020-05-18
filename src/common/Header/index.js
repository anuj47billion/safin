import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from 'react-native-reanimated';

const Header = props => {
  const {navigation, title, type} = props;
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [textColor, setTextColor] = useState('#000');

  useEffect(() => {
    if (type === 'bodyTemp') {
      setBackgroundColor('#2B9CE2');
      setTextColor('#fff');
    }
    if (type === 'breathing') {
      setBackgroundColor('#A44DFA');
      setTextColor('#fff');
    }
  }, [type]);

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View style={styles.parentView}>
        <View style={styles.iconView}>
          {type !== 'bodyTemp' && type !== 'breathing' && (
            <TouchableOpacity
              onPress={() => {
                navigation.toggleDrawer();
              }}>
              <FontAwesome name="bars" style={styles.icon} />
            </TouchableOpacity>
          )}
          {type === 'bodyTemp' && (
            <TouchableOpacity
              style={{paddingLeft: 10}}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign
                style={{color: textColor}}
                name="arrowleft"
                size={30}
              />
            </TouchableOpacity>
          )}
          {type === 'breathing' && (
            <TouchableOpacity
              style={{paddingLeft: 10}}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign
                style={{color: textColor}}
                name="arrowleft"
                size={30}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.titleView}>
          <Text style={[styles.titleText, {color: textColor}]}>{title}</Text>
        </View>
        <View style={styles.iconView}>
          {type !== 'weightComparison' && (
            <TouchableOpacity
              style={{paddingLeft: 10}}
              onPress={() => {
                //navigation.goBack();
              }}>
              <MaterialCommunityIcons
                name="bell-outline"
                style={[styles.icon, {color: textColor}]}
              />
            </TouchableOpacity>
          )}
          {type === 'weightComparison' && (
            <TouchableOpacity
              style={{paddingLeft: 10}}
              onPress={() => {
                navigation.push('App', {
                  screen: 'Weight',
                  goToInsideScreen: 'WeightForm',
                });
              }}>
              <AntDesign
                style={{color: '#2be23a'}}
                name="pluscircle"
                size={25}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 0.09,
    // backgroundColor: '#fff',
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
