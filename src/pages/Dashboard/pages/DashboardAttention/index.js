import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import Header from '../../../../common/Header';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RFValue} from 'react-native-responsive-fontsize';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DashboardAttention = props => {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Header title="Data" navigation={navigation} />
      <View style={styles.viewBody}>
        <View style={styles.topView}>
          <Text style={{color: '#fff', fontSize: RFValue(16, height)}}>
            Baby Tom's Vitals needs
          </Text>
          <Text style={{color: '#fff', fontSize: RFValue(30, height)}}>
            Immediate Attention
          </Text>
          <TouchableOpacity
            style={{width: '100%', alignItems: 'center', marginTop: 20}}
            onPress={() => {
              setModalVisible(true);
            }}>
            <View style={styles.snoozeView}>
              <Text style={styles.snoozeText}>Take Action</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '100%', alignItems: 'center', marginTop: 20}}>
            <Text style={styles.dismissText}>Snooze</Text>
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
              style={[styles.rowDetailView, {backgroundColor: '#FF808E'}]}>
              <Image
                source={require('../../../../assets/image/lungs-solid-1.png')}
              />
              <Text style={{color: '#fff'}}>20/min</Text>
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
          <ScrollView horizontal={true}>
            <View style={{width: width * 0.95, padding: 10}}>
              <View
                style={[styles.messageTopView, {backgroundColor: '#FD9068'}]}>
                <View
                  style={{
                    flex: 0.9,
                    justifyContent: 'center',
                    paddingLeft: 20,
                  }}>
                  <View>
                    <Text style={{color: '#fff'}}>Room Temperature</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{color: '#fff', fontSize: RFValue(20, height)}}>
                      100.8 F
                    </Text>
                    <Text style={{color: '#fff'}}> Normal: 96-99.9 F</Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.1,
                    justifyContent: 'center',
                    paddingRight: 10,
                  }}>
                  <FontAwesome5 name="temperature-low" color="#fff" size={25} />
                </View>
              </View>
              <View
                style={[
                  styles.messageBottomView,
                  {backgroundColor: '#FD9068'},
                ]}>
                <Text style={{color: '#fff', fontSize: RFValue(14, height)}}>
                  Your baby's body temperature is high, you need consult your
                  physician.
                </Text>
              </View>
            </View>
            <View style={{width: width * 0.95, padding: 10, marginLeft: -10}}>
              <View
                style={[styles.messageTopView, {backgroundColor: '#FF808E'}]}>
                <View
                  style={{
                    flex: 0.9,
                    justifyContent: 'center',
                    paddingLeft: 20,
                  }}>
                  <View>
                    <Text
                      style={{color: '#fff', fontSize: RFValue(16, height)}}>
                      Room Temperature
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{color: '#fff', fontSize: RFValue(20, height)}}>
                      100.8 F
                    </Text>
                    <Text
                      style={{color: '#fff', fontSize: RFValue(16, height)}}>
                      {' '}
                      Normal: 96-99.9 F
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.1,
                    justifyContent: 'center',
                    paddingRight: 10,
                  }}>
                  <FontAwesome5
                    name="temperature-low"
                    color="#fff"
                    size={RFValue(24, height)}
                  />
                </View>
              </View>
              <View
                style={[
                  styles.messageBottomView,
                  {backgroundColor: '#FF808E'},
                ]}>
                <Text style={{color: '#fff', fontSize: RFValue(14, height)}}>
                  Your baby's body temperature is high, you need consult your
                  physician.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalInsideView}>
            <View>
              <Text style={{fontSize: 18, fontWeight: '700'}}>
                Enter text message
              </Text>
            </View>
            <View style={styles.TextInputView}>
              <TextInput multiline={true} />
            </View>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{color: '#fff'}}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{color: '#1FC2CB'}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DashboardAttention;

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
    backgroundColor: '#FF808E',
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
    // padding: 20,
    flexDirection: 'column',
  },
  messageTopView: {
    flex: 0.55,
    flexDirection: 'row',
    // backgroundColor: '#FD9068',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  messageBottomView: {
    flex: 0.45,
    // backgroundColor: '#FD9068',
    paddingLeft: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInputView: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    marginTop: 15,
  },
  submitButton: {
    backgroundColor: '#1FC2CB',
    width: '40%',
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
    borderRadius: 20,
  },
  cancelButton: {
    width: '30%',
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#1FC2CB',
    marginLeft: 10,
  },
  modalInsideView: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 20,
    elevation: 4,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});
