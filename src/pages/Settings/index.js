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
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Settings = props => {
  const {navigation} = props;
  const [audibleAlert, setAudibleAlert] = useState(false);
  const [phoneAlert, setPhoneAlert] = useState(false);
  const [vitalDefaults, setVitalDefaults] = useState(false);
  const [heartRate, setHeartRate] = useState(false);
  const [bodyTemp, setBodyTemp] = useState(false);
  const [oxygenLevel, setOxygenLevel] = useState(false);
  const [breathing, setBreathing] = useState(false);
  const [sleepingPosition, setSleepingPosition] = useState(false);
  const [mattress, setMattress] = useState(false);

  return (
    <View style={styles.container}>
      <Header title="Settings" navigation={navigation} />
      <View style={styles.viewBody}>
        <View>
          <View>
            <Text style={{fontSize: 18, color: '#1FC2CB'}}>Alerts</Text>
          </View>
          <View style={styles.toggleParentView}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>
              Audible Alerts
            </Text>
            <View>
              <ToggleSwitch
                isOn={audibleAlert}
                size="large"
                onToggle={isOn => setAudibleAlert(!audibleAlert)}
              />
            </View>
          </View>
          <View style={styles.toggleParentView}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>Phone Alerts</Text>
            <View>
              <ToggleSwitch
                isOn={phoneAlert}
                size="large"
                onToggle={isOn => setPhoneAlert(!phoneAlert)}
              />
            </View>
          </View>
          <View style={styles.toggleParentView}>
            <Text style={{fontSize: 18, fontWeight: '700'}}>
              Vital Defaults
            </Text>
            <View>
              <ToggleSwitch
                isOn={vitalDefaults}
                size="large"
                onToggle={isOn => setVitalDefaults(!vitalDefaults)}
              />
            </View>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <View>
            <Text style={{fontSize: 18, color: '#1FC2CB'}}>Vital Monitors</Text>
          </View>
          <View style={styles.toggleParentView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign name="hearto" size={20} />
              <Text style={{fontSize: 16, fontWeight: '700', marginLeft: 12}}>
                Heart Rate
              </Text>
              <Text style={{fontSize: 13}}>(90-160 bpm)</Text>
            </View>
            <View>
              <ToggleSwitch
                isOn={heartRate}
                size="large"
                onToggle={isOn => setHeartRate(!heartRate)}
              />
            </View>
          </View>
          <View style={styles.toggleParentView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome5 name="thermometer-empty" size={22} />
              <Text style={{fontSize: 16, fontWeight: '700', marginLeft: 12}}>
                Body Temp
              </Text>
              <Text style={{fontSize: 13}}>(97-100.3)</Text>
            </View>
            <View>
              <ToggleSwitch
                isOn={bodyTemp}
                size="large"
                onToggle={isOn => setBodyTemp(!bodyTemp)}
              />
            </View>
          </View>
          <View style={styles.toggleParentView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{fontSize: 20, fontStyle: 'italic', fontWeight: '700'}}>
                O
              </Text>
              <Text
                style={{fontSize: 14, fontStyle: 'italic', fontWeight: '700'}}>
                2
              </Text>
              <Text style={{fontSize: 16, fontWeight: '700', marginLeft: 12}}>
                Oxygen Level
              </Text>
              <Text style={{fontSize: 13}}>(95-100%)</Text>
            </View>
            <View>
              <ToggleSwitch
                isOn={oxygenLevel}
                size="large"
                onToggle={isOn => setOxygenLevel(!oxygenLevel)}
              />
            </View>
          </View>
          <View style={styles.toggleParentView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text />
              <Text style={{fontSize: 16, fontWeight: '700', marginLeft: 12}}>
                Breathing
              </Text>
              <Text style={{fontSize: 13}}>(20-60/pm)</Text>
            </View>
            <View>
              <ToggleSwitch
                isOn={breathing}
                size="large"
                onToggle={isOn => setBreathing(!breathing)}
              />
            </View>
          </View>
          <View style={styles.toggleParentView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text />
              <Text style={{fontSize: 16, fontWeight: '700', marginLeft: 12}}>
                Sleeping Position
              </Text>
            </View>
            <View>
              <ToggleSwitch
                isOn={sleepingPosition}
                size="large"
                onToggle={isOn => setSleepingPosition(!sleepingPosition)}
              />
            </View>
          </View>
          <View style={styles.toggleParentView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome name="bed" size={22} />
              <Text style={{fontSize: 16, fontWeight: '700', marginLeft: 12}}>
                Firmness of Mattress
              </Text>
            </View>
            <View>
              <ToggleSwitch
                isOn={mattress}
                size="large"
                onToggle={isOn => setMattress(!mattress)}
              />
            </View>
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
  toggleParentView: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d5d5d5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
