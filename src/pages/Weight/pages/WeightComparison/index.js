import React, {useEffect, useState} from 'react';
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
import LineChart from './line-chart';

import Header from '../../../../common/Header';
import Footer from '../../../../common/Footer';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const WeightComparison = props => {
  const {navigation} = props;
  const [widthCount, setWidthCount] = useState(0);

  useEffect(() => {
    const data = [4, 5, 4, 5, 5, 6, 4, 6];
    setWidthCount(data.length / 5);
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title="Weight Comparison"
        type="weightComparison"
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
                backgroundColor: '#C7EAFE',
              }}
            />
            <Text>Baby's Weight</Text>
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
                backgroundColor: '#DCF2FF',
              }}
            />
            <Text>Guideline</Text>
          </View>
        </View>
        <View style={{flex: 0.9}}>
          <ScrollView horizontal={true}>
            <View style={{height: height * 0.75, width: width * widthCount}}>
              <LineChart
                data={{
                  labels: [
                    '0 month',
                    '1 month',
                    '2 month',
                    '3 month',
                    '4 month',
                    '5 month',
                    '6 month',
                  ],
                  yLabels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                  datasets: [
                    {
                      data: [4, 5, 4, 5, 5, 6, 4, 6],
                      color: () => '#C7EBFF',
                      shadowColor: '#72D4E5',
                      withShadowLines: false,
                    },
                    {
                      data: [4.5, 5, 5, 5.2, 5, 5, 4.5, 6],
                      color: () => '#C7EBFF',
                      shadowColor: '#C4E7FE',
                      withShadowLines: false,
                    },
                  ],
                }}
                withInnerLines={false}
                width={width * widthCount} // from react-native
                height={height * 0.75}
                yAxisLabel="0"
                // yAxisSuffix="k"
                yAxisInterval={10} // optional, defaults to 1
                yLabelsOffset={10}
                chartConfig={{
                  backgroundGradient: 'red',
                  backgroundColor: 'red',
                  backgroundGradientFrom: '#fff',
                  backgroundGradientTo: '#fff',
                  fillShadowGradient: '#00a1ff',
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => '#00a1ff',
                  labelColor: (opacity = 1) => '#000',
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '4',
                    strokeWidth: '2',
                    stroke: '#8DE0E5',
                  },
                }}
                bezier
                style={{
                  marginVertical: 30,
                  marginHorizontal: -25,
                }}
                // formatYLabel={(value, key) => value}
              />
            </View>
          </ScrollView>
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

export default WeightComparison;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBody: {
    flex: 0.83,
    flexDirection: 'column',
    backgroundColor: '#F5FBFF',
  },
});
