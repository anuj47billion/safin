import React from 'react';
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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Dashboard = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Header title="Data" navigation={navigation} />
      <View style={styles.viewBody}>
        <View style={styles.topView}>
          <View style={styles.topCutView} />
          <View style={styles.circleOuterView}>
            <View style={styles.circleInnerView}>
              <View
                style={{
                  borderWidth: 3,
                  borderColor: '#fff',
                  padding: 65,
                  borderRadius: 200,
                }}>
                <Text>Perfect</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          {/* <Text>VVVVVVVVVVVVVVVVVV</Text> */}
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBody: {
    flex: 0.91,
    flexDirection: 'column',
  },
  topView: {
    flex: 0.5,
    flexDirection: 'column',
  },
  bottomView: {
    flex: 0.5,
  },
  topCutView: {
    flex: 0.6,
    backgroundColor: '#22D78A',
    borderBottomRightRadius: 125,
    borderBottomLeftRadius: 125,
  },
  circleOuterView: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleInnerView: {
    borderWidth: 5,
    // padding: 60,
    marginTop: -100,
    backgroundColor: '#22D78A',
    borderRadius: 200,
    borderColor: '#22D78A',
  },
});
