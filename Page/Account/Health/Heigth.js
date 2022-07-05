import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Images from '../../../Images/Images';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Heigth = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.chart}>
        <View style={styles.header}>
          <Image source={Images.height} style={styles.height} />
          <View>
            <Text style={styles.text}>Chỉ số chiều cao</Text>
            <Text style={styles.month}>Tháng 3</Text>
          </View>
        </View>
        <LineChart
          data={{
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            datasets: [
              {
                data: [8.1, 12, 7, 8, 2, 3, 9, 10],
              },
            ],
          }}
          withShadow={false}
          withVerticalLines={false}
          withOuterLines={false}
          withInnerLines={false}
          width={width - 32 * px} // from react-native
          height={250}
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => '#F26091',
            labelColor: (opacity = 1) => 'black',

            propsForDots: {
              r: '0',
              strokeWidth: '1',
              backgroundGradientFrom: 'blue',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
          }}
        />
      </View>
      <TouchableOpacity style={styles.knot}
      onPress={()=>{
        props.open()
      }}
      >
        <Text style={styles.text1}>Cập nhật chỉ số</Text>
        <Image source={Images.rooftop} style={styles.rooftop} />
      </TouchableOpacity>
      <View style={{height: 300 * px}} />
    </View>
  );
};

export default Heigth;

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  height: {
    width: 20,
    height: 25,
    resizeMode: 'stretch',
    marginRight: 20 * px,
  },
  text: {
    fontSize: 15 * px,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 5 * px,
  },
  month: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: 'gray',
  },
  chart: {
    marginTop: 30 * px,
  },
  knot: {
    width: 282 * px,
    height: 44 * px,
    borderRadius: 16 * px,
    backgroundColor: '#F26091',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 15 * px,
    fontWeight: '600',
    color: '#fff',
  },
  rooftop: {
    width: 14 * px,
    height: 6 * px,
    resizeMode: 'stretch',
    marginLeft: 10 * px,
    marginTop: 5 * px,
  },
});
