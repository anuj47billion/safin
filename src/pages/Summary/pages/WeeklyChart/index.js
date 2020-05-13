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
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LineChart from '../../../../components/line-chart/line-chart';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const WeeklyChart = props => {
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
                13 may 2020 - 19 may 2020
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.push('App', {
                    screen: 'Summary',
                    goToInsideScreen: 'WeeklySummary',
                  });
                }}>
                <Entypo name="clipboard" color="#000" size={25} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginTop: -115, padding: 10}}>
          <ScrollView>
            <View>
              <View
                style={{
                  backgroundColor: '#A44DFA',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}>
                <View style={{flexDirection: 'row', padding: 12}}>
                  <Entypo name="heart-outlined" color="#fff" size={25} />
                  <Text style={{color: '#fff', marginLeft: 5, fontSize: 16}}>
                    Heart Rate
                  </Text>
                  <Text style={{color: '#fff', marginLeft: 5}}>
                    (90-160 bpm)
                  </Text>
                </View>
              </View>
              <View style={{backgroundColor: '#fff'}}>
                <Text
                  style={{fontWeight: '700', marginLeft: 5, marginBottom: 5}}>
                  bpm
                </Text>
                <LineChart
                  // fromZero={true}
                  data={{
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [
                      {
                        data: [130, 170, 110, 90, 100, 80, 120],
                      },
                      {
                        data: [90, 90, 90, 90, 90, 90, 90],
                        withDots: false,
                        color: () => '#C7EBFF',
                      },
                      {
                        data: [160, 160, 160, 160, 160, 160, 160],
                        withDots: false,
                        color: () => '#C7EBFF',
                      },
                    ],
                  }}
                  withInnerLines={true}
                  width={width}
                  height={height * 0.27}
                  chartConfig={{
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    fillShadowGradient: '#00d4f9',
                    decimalPlaces: 0,
                    color: (opacity = 1) => 'rgba(255, 255, 255, 255)',
                    labelColor: (opacity = 1) => '#000',
                    propsForDots: {
                      r: '4',
                      strokeWidth: '2',
                      stroke: '#8DE0E5',
                    },
                  }}
                  style={{
                    elevation: 4,
                    shadowOffset: {width: 5, height: 5},
                    shadowColor: 'grey',
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                  }}
                  bezier
                />
              </View>
            </View>

            <View style={{marginTop: 10}}>
              <View
                style={{
                  backgroundColor: '#2B9CE2',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}>
                <View style={{flexDirection: 'row', padding: 12}}>
                  <FontAwesome5
                    name="thermometer-empty"
                    color="#fff"
                    size={25}
                  />
                  <Text style={{color: '#fff', marginLeft: 5, fontSize: 16}}>
                    Body Temp
                  </Text>
                  <Text style={{color: '#fff', marginLeft: 5}}>
                    (97-100.3 Fahrenheit)
                  </Text>
                </View>
              </View>
              <View style={{backgroundColor: '#fff'}}>
                <Text
                  style={{fontWeight: '700', marginLeft: 5, marginBottom: 5}}>
                  Fahrenheit
                </Text>
                <LineChart
                  // fromZero={true}
                  data={{
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [
                      {
                        data: [95, 98, 93, 100, 101, 90, 97],
                      },
                      {
                        data: [97, 97, 97, 97, 97, 97, 97],
                        withDots: false,
                        color: () => '#C7EBFF',
                      },
                      {
                        data: [100.3, 100.3, 100.3, 100.3, 100.3, 100.3, 100.3],
                        withDots: false,
                        color: () => '#C7EBFF',
                      },
                    ],
                  }}
                  withInnerLines={true}
                  width={width}
                  height={height * 0.27}
                  chartConfig={{
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    fillShadowGradient: '#00d4f9',
                    decimalPlaces: 0,
                    color: (opacity = 1) => 'rgba(255, 255, 255, 255)',
                    labelColor: (opacity = 1) => '#000',
                    propsForDots: {
                      r: '4',
                      strokeWidth: '2',
                      stroke: '#8DE0E5',
                    },
                  }}
                  style={{
                    elevation: 4,
                    shadowOffset: {width: 5, height: 5},
                    shadowColor: 'grey',
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                  }}
                  bezier
                />
              </View>
            </View>

            <View style={{marginTop: 10}}>
              <View
                style={{
                  backgroundColor: '#A44DFA',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}>
                <View style={{flexDirection: 'row', padding: 12}}>
                  <Entypo name="heart-outlined" color="#fff" size={25} />
                  <Text style={{color: '#fff', marginLeft: 5, fontSize: 16}}>
                    Heart Rate
                  </Text>
                  <Text style={{color: '#fff', marginLeft: 5}}>
                    (90-160 bpm)
                  </Text>
                </View>
              </View>
              <View style={{backgroundColor: '#fff'}}>
                <Text
                  style={{fontWeight: '700', marginLeft: 5, marginBottom: 5}}>
                  bpm
                </Text>
                <LineChart
                  fromZero={true}
                  data={{
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [
                      {
                        data: [130, 170, 110, 90, 100, 80, 120],
                      },
                      {
                        data: [90, 90, 90, 90, 90, 90, 90],
                        withDots: false,
                        color: () => '#C7EBFF',
                      },
                      {
                        data: [160, 160, 160, 160, 160, 160, 160],
                        withDots: false,
                        color: () => '#C7EBFF',
                      },
                    ],
                  }}
                  withInnerLines={true}
                  width={width}
                  height={height * 0.27}
                  chartConfig={{
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    fillShadowGradient: '#00d4f9',
                    decimalPlaces: 0,
                    color: (opacity = 1) => 'rgba(255, 255, 255, 255)',
                    labelColor: (opacity = 1) => '#000',
                    propsForDots: {
                      r: '4',
                      strokeWidth: '2',
                      stroke: '#8DE0E5',
                    },
                  }}
                  style={{
                    elevation: 4,
                    shadowOffset: {width: 5, height: 5},
                    shadowColor: 'grey',
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                  }}
                  bezier
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default WeeklyChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#C4E7FE',
  },
  viewBody: {
    flex: 0.91,
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
