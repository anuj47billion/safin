import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../../common/Header';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;

const DashboardWarning = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Header title="Data" navigation={navigation} />
      <View style={styles.viewBody}>
        <View style={styles.topView}>
          <Text style={{color: '#fff'}}>Tom's Health</Text>
          <Text style={{color: '#fff', fontSize: 30}}>Warning</Text>
          <TouchableOpacity
            style={{width: '100%', alignItems: 'center', marginTop: 20}}>
            <View style={styles.snoozeView}>
              <Text style={styles.snoozeText}>Snooze</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '100%', alignItems: 'center', marginTop: 20}}>
            <Text style={styles.dismissText}>Dismiss</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.centerView}>
          <View style={styles.detailsView}>
            <View style={styles.rowDetailView}>
              <Entypo name="heart" size={25} />
              <Text>120 BPM</Text>
            </View>
            <View style={styles.rowDetailView}>
              <FontAwesome5 name="temperature-low" size={25} />
              <Text>100.8 F</Text>
            </View>
            <View style={styles.rowDetailView}>
              <Text>95%</Text>
            </View>
          </View>
          <View style={styles.detailsView}>
            <View style={styles.rowDetailView}>
              <Text>20/min</Text>
            </View>
            <View style={styles.rowDetailView}>
              <Text>Back</Text>
            </View>
            <View style={styles.rowDetailView}>
              <FontAwesome name="bed" size={25} />
              <Text>Soft</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.messageTopView}>
            <View
              style={{flex: 0.9, justifyContent: 'center', paddingLeft: 20}}>
              <View>
                <Text style={{color: '#fff'}}>Room Temperature</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: '#fff', fontSize: 20}}>100.8 F</Text>
                <Text style={{color: '#fff'}}> Normal: 96-99.9 F</Text>
              </View>
            </View>
            <View
              style={{flex: 0.1, justifyContent: 'center', paddingRight: 10}}>
              <FontAwesome5 name="temperature-low" color="#fff" size={25} />
            </View>
          </View>
          <View style={styles.messageBottomView}>
            <Text style={{color: '#fff'}}>
              Your baby's body temperature is high, you need consult your
              physician.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DashboardWarning;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBody: {
    flex: 0.91,
  },
  topView: {
    flex: 0.4,
    backgroundColor: '#FD9068',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerView: {
    flex: 0.4,
    flexDirection: 'column',
  },
  snoozeView: {
    backgroundColor: '#fff',
    padding: 10,
    width: '45%',
    alignItems: 'center',
    borderRadius: 50,
  },
  snoozeText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  dismissText: {
    color: '#fff',
    fontSize: 16,
  },
  detailsView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
  },
  rowDetailView: {
    width: width * 0.25,
    height: width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',

    elevation: 4,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  marginView: {
    marginTop: 12,
  },
  bottomView: {
    flex: 0.2,
    padding: 20,
    flexDirection: 'column',
  },
  messageTopView: {
    flex: 0.55,
    flexDirection: 'row',
    backgroundColor: '#FD9068',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  messageBottomView: {
    flex: 0.45,
    backgroundColor: '#FD9068',
    paddingLeft: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
