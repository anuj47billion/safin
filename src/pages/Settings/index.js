import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Header from '../../common/Header';
import ToggleSwitch from 'toggle-switch-react-native';

const Settings = props => {
  const {navigation} = props;
  const [audibleAlert, serAudibleAlert] = useState(false);

  return (
    <View style={styles.container}>
      <Header title="Settings" navigation={navigation} />
      <View style={styles.viewBody}>
        <View>
          <Text style={{fontSize: 18, color: '#1FC2CB'}}>Alerts</Text>
        </View>
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#d5d5d5',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: '700'}}>Audible Alerts</Text>
          <View>
            <ToggleSwitch
              isOn={audibleAlert}
              size="large"
              onToggle={isOn => serAudibleAlert(!audibleAlert)}
            />
          </View>
        </View>
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#d5d5d5',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: '700'}}>Phone Alerts</Text>
          <View>
            <ToggleSwitch
              isOn={audibleAlert}
              size="large"
              onToggle={isOn => serAudibleAlert(!audibleAlert)}
            />
          </View>
        </View>
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#d5d5d5',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: '700'}}>Vital Defaults</Text>
          <View>
            <ToggleSwitch
              isOn={audibleAlert}
              size="large"
              onToggle={isOn => serAudibleAlert(!audibleAlert)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewBody: {
    flex: 0.91,
    padding: 25,
  },
  dashboardBody: {
    flex: 0.92,
  },
  dashboardHeader: {
    flex: 0.08,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#d2d2d2',
  },
  headerOptionView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topView: {
    flexDirection: 'row',
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  imageView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sideIconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  itemListView: {
    borderBottomWidth: 1,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },
});
