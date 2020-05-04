import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Header from '../../common/Header';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LineChart} from 'react-native-chart-kit';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Summary = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Header title="Summary" navigation={navigation} />
      <View style={styles.viewBody}>
        <LineChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                data: [130, 170, 110, 90, 100, 80, 120, 150],
              },
            ],
          }}
          width={width} // from react-native
          height={220}
          // yAxisLabel="$"
          // yAxisSuffix="k"
          // yAxisInterval={1} // optional, defaults to 1
          yLabelsOffset={10}
          chartConfig={{
            color: (opacity = 1) => `#C4E7FE`,
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4E7FE',
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
