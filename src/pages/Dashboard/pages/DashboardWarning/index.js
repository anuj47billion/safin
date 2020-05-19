import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../../common/Header';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RFValue} from 'react-native-responsive-fontsize';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DashboardWarning = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Header title="Data" navigation={navigation} />
      <View style={styles.viewBody}>
        <View style={styles.topView}>
          <Text style={{color: '#fff', fontSize: RFValue(16, height)}}>
            Baby Tom's Vitals are indicating a
          </Text>
          <Text style={{color: '#fff', fontSize: RFValue(30, height)}}>
            Warning
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.push('App', {
                screen: 'Dashboard',
                goToInsideScreen: 'DashboardAttention',
              });
            }}
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
            <TouchableOpacity
              onPress={() => {
                navigation.push('App', {
                  screen: 'Dashboard',
                  goToInsideScreen: 'Breathing',
                });
              }}
              style={styles.rowDetailView}>
              <Image
                source={require('../../../../assets/image/lungs-solid.png')}
              />
              <Text>20/min</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.push('App', {
                  screen: 'Dashboard',
                  goToInsideScreen: 'BodyTemperature',
                });
              }}
              style={[styles.rowDetailView, {backgroundColor: '#FD9068'}]}>
              <FontAwesome5
                name="temperature-low"
                color="#fff"
                size={RFValue(24, height)}
              />
              <Text style={{color: '#fff'}}>100.8 F</Text>
            </TouchableOpacity>
            <View style={styles.rowDetailView}>
              <Image
                source={require('../../../../assets/image/back-solid.png')}
              />
              <Text>Back</Text>
            </View>
          </View>
          <View style={styles.detailsView}>
            <View
              style={[
                styles.bottomRowDetailView,
                {backgroundColor: '#edeff0'},
              ]}>
              <Entypo color="#A7AFBE" name="heart" size={RFValue(24, height)} />
              <Text>120 BPM</Text>
            </View>
            <View
              style={[
                styles.bottomRowDetailView,
                {backgroundColor: '#edeff0'},
              ]}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: RFValue(24, height),
                    fontWeight: '700',
                    color: '#A7AFBE',
                  }}>
                  O
                </Text>
                <Text style={{fontWeight: '700', color: '#A7AFBE'}}>2</Text>
              </View>
              <Text>95%</Text>
            </View>
            <View
              style={[
                styles.bottomRowDetailView,
                {backgroundColor: '#edeff0'},
              ]}>
              <FontAwesome
                color="#A7AFBE"
                name="bed"
                size={RFValue(24, height)}
              />
              <Text>Soft</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.messageTopView}>
            <View
              style={{flex: 0.9, justifyContent: 'center', paddingLeft: 20}}>
              <View>
                <Text style={{color: '#fff', fontSize: RFValue(16, height)}}>
                  Room Temperature
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: '#fff', fontSize: RFValue(20, height)}}>
                  100.8 F
                </Text>
                <Text style={{color: '#fff', fontSize: RFValue(16, height)}}>
                  {' '}
                  Normal: 96-99.9 F
                </Text>
              </View>
            </View>
            <View
              style={{flex: 0.1, justifyContent: 'center', paddingRight: 10}}>
              <FontAwesome5
                name="temperature-low"
                color="#fff"
                size={RFValue(24, height)}
              />
            </View>
          </View>
          <View style={styles.messageBottomView}>
            <Text style={{color: '#fff', fontSize: RFValue(14, height)}}>
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
    backgroundColor: '#F5FBFF',
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
    fontSize: RFValue(16, height),
  },
  dismissText: {
    color: '#fff',
    fontSize: RFValue(16, height),
  },
  detailsView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 20,
  },
  rowDetailView: {
    width: height * 0.127,
    height: height * 0.127,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  bottomRowDetailView: {
    width: height * 0.127,
    height: height * 0.127,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
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
