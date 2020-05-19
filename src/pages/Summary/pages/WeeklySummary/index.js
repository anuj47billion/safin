import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../../common/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const WeeklySummary = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Header title="Weekly Summary" navigation={navigation} />
      <View style={styles.viewBody}>
        <View style={{height: height * 0.22, backgroundColor: '#C4E7FE'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <View>
              <Text style={{fontSize: 16, fontWeight: '700'}}>
                Monday, 13 may 2020
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.push('App', {
                    screen: 'Summary',
                    goToInsideScreen: 'WeeklyChart',
                  });
                }}>
                <FontAwesome name="area-chart" color="#000" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{marginTop: -115}}>
          <ScrollView horizontal={true}>
            <View style={{paddingTop: 20, paddingLeft: 20}}>
              <View style={styles.scrollViews}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <View style={styles.topView}>
                    <View style={styles.topCutView} />
                    <View style={styles.circleOuterView}>
                      <View style={styles.circleInnerView}>
                        <View
                          style={{
                            borderWidth: 3,
                            borderColor: '#fff',
                            padding: 45,
                            borderRadius: 200,
                            alignItems: 'center',
                          }}>
                          <Text style={{color: '#fff'}}>Tom's Health</Text>
                          <Text style={{color: '#fff', fontSize: 30}}>
                            Perfect
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.bottomView}>
                    <View style={styles.detailsView}>
                      <View style={styles.rowDetailView}>
                        <Image
                          source={require('../../../../assets/image/lungs-solid.png')}
                        />
                        <Text>20/min</Text>
                      </View>
                      <View style={styles.rowDetailView}>
                        <FontAwesome5 name="temperature-low" size={25} />
                        <Text>100.8 F</Text>
                      </View>
                      <View style={styles.rowDetailView}>
                        <Image
                          source={require('../../../../assets/image/back-solid.png')}
                        />
                        <Text>Back</Text>
                      </View>
                    </View>
                    <View style={[styles.detailsView, styles.marginView]}>
                      <View
                        style={[
                          styles.bottomRowDetailView,
                          {backgroundColor: '#edeff0'},
                        ]}>
                        <Entypo color="#A7AFBE" name="heart" size={25} />
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
                              fontSize: 25,
                              fontWeight: '700',
                              color: '#A7AFBE',
                            }}>
                            O
                          </Text>
                          <Text style={{fontWeight: '700', color: '#A7AFBE'}}>
                            2
                          </Text>
                        </View>
                        <Text>95%</Text>
                      </View>
                      <View
                        style={[
                          styles.bottomRowDetailView,
                          {backgroundColor: '#edeff0'},
                        ]}>
                        <FontAwesome color="#A7AFBE" name="bed" size={25} />
                        <Text>Soft</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{paddingTop: 20}}>
              <View style={[styles.scrollViews, {marginLeft: 15}]}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <View style={styles.topView}>
                    <View style={styles.topCutView} />
                    <View style={styles.circleOuterView}>
                      <View style={styles.circleInnerView}>
                        <View
                          style={{
                            borderWidth: 3,
                            borderColor: '#fff',
                            padding: 45,
                            borderRadius: 200,
                            alignItems: 'center',
                          }}>
                          <Text style={{color: '#fff'}}>Tom's Health</Text>
                          <Text style={{color: '#fff', fontSize: 30}}>
                            Perfect
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.bottomView}>
                    <View style={styles.detailsView}>
                      <View style={styles.rowDetailView}>
                        <Image
                          source={require('../../../../assets/image/lungs-solid.png')}
                        />
                        <Text>20/min</Text>
                      </View>
                      <View style={styles.rowDetailView}>
                        <FontAwesome5 name="temperature-low" size={25} />
                        <Text>100.8 F</Text>
                      </View>
                      <View style={styles.rowDetailView}>
                        <Image
                          source={require('../../../../assets/image/back-solid.png')}
                        />
                        <Text>Back</Text>
                      </View>
                    </View>
                    <View style={[styles.detailsView, styles.marginView]}>
                      <View
                        style={[
                          styles.bottomRowDetailView,
                          {backgroundColor: '#edeff0'},
                        ]}>
                        <Entypo color="#A7AFBE" name="heart" size={25} />
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
                              fontSize: 25,
                              fontWeight: '700',
                              color: '#A7AFBE',
                            }}>
                            O
                          </Text>
                          <Text style={{fontWeight: '700', color: '#A7AFBE'}}>
                            2
                          </Text>
                        </View>
                        <Text>95%</Text>
                      </View>
                      <View
                        style={[
                          styles.bottomRowDetailView,
                          {backgroundColor: '#edeff0'},
                        ]}>
                        <FontAwesome color="#A7AFBE" name="bed" size={25} />
                        <Text>Soft</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{paddingTop: 20}}>
              <View style={[styles.scrollViews, {marginLeft: 15}]}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                  <View style={styles.topView}>
                    <View style={styles.topCutView} />
                    <View style={styles.circleOuterView}>
                      <View style={styles.circleInnerView}>
                        <View
                          style={{
                            borderWidth: 3,
                            borderColor: '#fff',
                            padding: 45,
                            borderRadius: 200,
                            alignItems: 'center',
                          }}>
                          <Text style={{color: '#fff'}}>Tom's Health</Text>
                          <Text style={{color: '#fff', fontSize: 30}}>
                            Perfect
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.bottomView}>
                    <View style={styles.detailsView}>
                      <View style={styles.rowDetailView}>
                        <Image
                          source={require('../../../../assets/image/lungs-solid.png')}
                        />
                        <Text>20/min</Text>
                      </View>
                      <View style={styles.rowDetailView}>
                        <FontAwesome5 name="temperature-low" size={25} />
                        <Text>100.8 F</Text>
                      </View>
                      <View style={styles.rowDetailView}>
                        <Image
                          source={require('../../../../assets/image/back-solid.png')}
                        />
                        <Text>Back</Text>
                      </View>
                    </View>
                    <View style={[styles.detailsView, styles.marginView]}>
                      <View
                        style={[
                          styles.bottomRowDetailView,
                          {backgroundColor: '#edeff0'},
                        ]}>
                        <Entypo color="#A7AFBE" name="heart" size={25} />
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
                              fontSize: 25,
                              fontWeight: '700',
                              color: '#A7AFBE',
                            }}>
                            O
                          </Text>
                          <Text style={{fontWeight: '700', color: '#A7AFBE'}}>
                            2
                          </Text>
                        </View>
                        <Text>95%</Text>
                      </View>
                      <View
                        style={[
                          styles.bottomRowDetailView,
                          {backgroundColor: '#edeff0'},
                        ]}>
                        <FontAwesome color="#A7AFBE" name="bed" size={25} />
                        <Text>Soft</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default WeeklySummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBody: {
    flex: 0.91,
  },
  topView: {
    flex: 0.55,
    flexDirection: 'column',
  },
  bottomView: {
    flex: 0.45,
    flexDirection: 'column',
  },
  detailsView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
  topCutView: {
    flex: 0.7,
    backgroundColor: '#22D78A',
    borderBottomRightRadius: 115,
    borderBottomLeftRadius: 115,
  },
  circleOuterView: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleInnerView: {
    borderWidth: 5,
    // padding: 60,
    marginTop: -140,
    backgroundColor: '#22D78A',
    borderRadius: 200,
    borderColor: '#22D78A',
  },
  scrollViews: {
    height: height * 0.72,
    width: width * 0.85,
    backgroundColor: '#fff',
    elevation: 4,
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  marginView: {
    marginTop: 20,
  },
});
