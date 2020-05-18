import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import LineChart from '../../components/line-chart';
import Header from '../../../../common/Header';
import Orientation from 'react-native-orientation';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BodyTemperature = props => {
  const {navigation} = props;
  const [widthCount, setWidthCount] = useState(0);

  useEffect(() => {
    const data = [
      '12:00pm',
      '1:00pm',
      '2:00pm',
      '3:00pm',
      '4:00pm',
      '5:00pm',
      '6:00pm',
      '7:00pm',
      '8:00pm',
      '9:00pm',
      '10:00pm',
      '11:00pm',
    ];
    setWidthCount(data.length / 5);

    Orientation.getOrientation((_err, orientation) => {
      if (orientation === 'LANDSCAPE') {
        Orientation.lockToPortrait();
      }
    });
  }, []);

  const onChangeOrientation = () => {
    Orientation.getOrientation((_err, orientation) => {
      if (orientation === 'PORTRAIT') {
        Orientation.lockToLandscape();
        navigation.push('App', {
          screen: 'Dashboard',
          goToInsideScreen: 'BodyTemperatureLandscape',
        });
      }
    });
  };

  const onDotPress = (x, i) => {
    navigation.push('App', {
      screen: 'Dashboard',
      goToInsideScreen: 'BodyTemperatureNotifications',
    });
  };

  return (
    <View style={styles.container}>
      <Header
        title="Body Temperature"
        type="bodyTemp"
        navigation={navigation}
      />
      <View style={styles.viewBody}>
        <View
          style={{flexDirection: 'row', justifyContent: 'center', flex: 0.1}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 25,
                height: 12,
                borderRadius: 10,
                marginRight: 5,
                backgroundColor: '#79bde8',
              }}
            />
            <Text>Awake</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 15,
            }}>
            <View
              style={{
                width: 25,
                height: 12,
                borderRadius: 10,
                marginRight: 5,
                backgroundColor: '#2B9CE2',
              }}
            />
            <Text>Sleeping</Text>
          </View>
        </View>
        <View style={{flex: 0.9}}>
          <ScrollView horizontal={true}>
            <TouchableOpacity
              // onPress={() => onChangeOrientation()}
              style={{height: height * 0.75, width: width * widthCount}}>
              <LineChart
                data={{
                  labels: [
                    '12:00pm',
                    '1:00pm',
                    '2:00pm',
                    '3:00pm',
                    '4:00pm',
                    '5:00pm',
                    '6:00pm',
                    '7:00pm',
                    '8:00pm',
                    '9:00pm',
                    '10:00pm',
                    '11:00pm',
                  ],
                  datasets: [
                    {
                      data: [
                        95,
                        96.5,
                        99,
                        0,
                        0,
                        0,
                        97,
                        100,
                        98,
                        100.9,
                        96.5,
                        98,
                      ],
                      shadowColor: '#79bde8',
                      r: '10',
                      strokeWidth: '2',
                      stroke: '#FD9068',
                      dotFullColor: '#FD9068',
                      color: () => '#79bde8',
                    },
                    {
                      data: [0, 0, 0, 97, 98, 96, 0, 0, 0, 0, 0, 0],
                      shadowColor: '#2B9CE2',
                      r: '10',
                      strokeWidth: '2',
                      stroke: '#FD9068',
                      dotFullColor: '#FD9068',
                      color: () => '#2B9CE2',
                    },
                  ],
                }}
                width={width * widthCount} // from react-native
                height={height * 0.75}
                yAxisSuffix="bpm"
                yAxisInterval={1} // optional, defaults to 1
                withInnerLines={false}
                chartConfig={{
                  backgroundGradientFrom: '#1E2923',
                  backgroundGradientFromOpacity: 0,
                  backgroundGradientTo: '#08130D',
                  backgroundGradientToOpacity: 0.5,
                  fillShadowGradient: '#CAA2FA',
                  useShadowColorFromDataset: true,
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  xyLabelColor: '#000',
                  xyAxisColor: '#000',
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '10',
                    strokeWidth: '3',
                    stroke: '#fff',
                  },
                }}
                bezier
                style={{
                  marginVertical: 30,
                  marginHorizontal: 0,
                }}
                onDotPress={onDotPress}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default BodyTemperature;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBody: {
    flex: 0.91,
    flexDirection: 'column',
    backgroundColor: '#F5FBFF',
    position: 'relative',
  },
});
