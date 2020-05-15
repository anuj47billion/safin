/* eslint-disable react-hooks/exhaustive-deps */
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
  BackHandler,
  Platform,
  SafeAreaView,
} from 'react-native';
import LineChart from '../../components/line-chart';
import Header from '../../../../common/Header';
import Orientation from 'react-native-orientation';
import GlobalStyles from '../../../../common/GlobalStyles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BodyTemperatureLandscape = props => {
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
    Orientation.lockToLandscape();
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
  }, [handleBackButtonClick]);

  const handleBackButtonClick = () => {
    Orientation.getOrientation((_err, orientation) => {
      if (orientation === 'LANDSCAPE') {
        Orientation.lockToPortrait();
        navigation.push('App', {
          screen: 'Dashboard',
          goToInsideScreen: 'BodyTemperature',
        });
      }
      return true;
    });
  };

  const onChangeOrientation = () => {
    Orientation.getOrientation((_err, orientation) => {
      if (orientation === 'LANDSCAPE') {
        Orientation.lockToPortrait();
        navigation.push('App', {
          screen: 'Dashboard',
          goToInsideScreen: 'BodyTemperature',
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <TouchableOpacity
          onPress={() => onChangeOrientation()}
          style={{height: height, width: width * widthCount}}>
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
                    98,
                    98.5,
                    99,
                    97,
                    100,
                    99.5,
                    98,
                    99,
                    100,
                    100.9,
                    99.5,
                    98,
                  ],
                  shadowColor: '#2B9CE2',
                  r: '10',
                  strokeWidth: '2',
                  stroke: '#FD9068',
                  dotFullColor: '#FD9068',
                },
              ],
            }}
            width={width * widthCount} // from react-native
            height={height * 0.95}
            yAxisSuffix="bpm"
            yAxisInterval={1} // optional, defaults to 1
            withInnerLines={false}
            chartConfig={{
              backgroundColor: 'transparent',
              backgroundGradientFrom: 'transparent',
              backgroundGradientTo: 'transparent',
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => 'rgba(255, 255, 255, 255)',
              labelColor: (opacity = 1) => 'rgba(255, 255, 255, 255)',
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
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default BodyTemperatureLandscape;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FBFF',
    position: 'relative',
  },
});
