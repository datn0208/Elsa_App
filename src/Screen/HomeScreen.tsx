import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView ,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LineChart } from 'react-native-chart-kit';

// Define props for the HomeScreen component
type Props = {
  navigation: any; // Replace with specific navigation prop type if available
};

// Functional component for the HomeScreen
const HomeScreen: React.FC<Props> = ({ navigation }) => {
  // Function to truncate text if too long
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const [chartWidth, setChartWidth] = useState(Dimensions.get('window').width - 40);

  const updateDimensions = () => {
    setChartWidth(Dimensions.get('window').width - 40);
  };

  useEffect(() => {
    // Add event listener on component mount
    Dimensions.addEventListener('change', updateDimensions);

    // // Return cleanup function to remove event listener
    // return () => {
    //   Dimensions.removeEventListener('change', updateDimensions);
    // };
  }, []); // Empty dependency array ensures the effect runs only once on mount
   const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  return (  
    <View style={styles.container}>
      {/* Scrollable area for charts */}
      <ScrollView contentContainerStyle={styles.chartContainer}>
        {/* Line Chart */}
        <View style={styles.chart}>
          <Text style={styles.chartTitle}>Temperature Trends</Text>
          <LineChart
            data={data}
            width={300}
            height={200}
            chartConfig={{
              backgroundColor: '#f9f9f9',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(30, 144, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>

        {/* Line Chart */}
        <View style={styles.chart}>
          <Text style={styles.chartTitle}>Temperature Trends</Text>
          <LineChart
            data={data}
            width={300}
            height={200}
            chartConfig={{
              backgroundColor: '#f9f9f9',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(30, 144, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>

        {/* Line Chart */}
        <View style={styles.chart}>
          <Text style={styles.chartTitle}>Temperature Trends</Text>
          <LineChart
            data={data}
            width={300}
            height={200}
            chartConfig={{
              backgroundColor: '#f9f9f9',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(30, 144, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>

        {/* Line Chart */}
        <View style={styles.chart}>
          <Text style={styles.chartTitle}>Temperature Trends</Text>
          <LineChart
            data={data}
            width={300}
            height={200}
            chartConfig={{
              backgroundColor: '#f9f9f9',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(30, 144, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
      </ScrollView>

      {/* Navigation buttons */}
      <View style={styles.bottomNavigation}>
        {/* Home navigation button */}
        <View style={styles.centeredNavigationButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.other1Button}>
            <Icon name="home" size={26} color="#ff6347" />
          </TouchableOpacity>
        </View>

        {/* Charts navigation button */}
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Charts')}>
          <Icon name="bar-chart" size={20} color="#fff" />
          <Text style={styles.navigationButtonText}>Charts</Text>
        </TouchableOpacity>

        {/* Alarm navigation button */}
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Alarm')}>
          <Icon name="bell" size={20} color="#fff" />
          <Text style={styles.navigationButtonText}>Alarm</Text>
        </TouchableOpacity>

        {/* Profile navigation button */}
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Profile')}>
          <Icon name="user" size={20} color="#fff" />
          <Text style={styles.navigationButtonText}>Profile</Text>
        </TouchableOpacity>

        {/* Settings navigation button */}
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Settings')}>
          <Icon name="cog" size={20} color="#fff" />
          <Text style={styles.navigationButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for the HomeScreen component
const styles = StyleSheet.create({
  chartContainer: {
    flexGrow: 1,
    width: '100%',
    paddingTop: 10, // Adjusted vertical padding for the charts
    paddingBottom: 85, // Adjusted vertical padding for the charts
  },
  chart: {
    backgroundColor: '#fff',
    paddingHorizontal: 20, // Horizontal padding for each chart
    paddingVertical: 15, // Vertical padding for each chart
    marginBottom: 10, // Margin bottom for each chart
    borderRadius: 10, // Border radius for each chart
    borderWidth: 1, // Border width for each chart
    borderColor: '#ccc', // Border color for each chart
    shadowColor: '#000', // Shadow color for each chart
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for each chart
    shadowOpacity: 0.3, // Shadow opacity for each chart
    shadowRadius: 2, // Shadow radius for each chart
    elevation: 5, // Elevation for Android shadow
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10, // Margin bottom for the chart title
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20, // Horizontal padding for the container
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#4267B2',
    paddingHorizontal: 20, // Horizontal padding for the bottom navigation bar
    paddingVertical: 10, // Vertical padding for the bottom navigation bar
  },
  navigationButton: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  navigationButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5, // Margin top for the navigation button text
  },
  centeredNavigationButton: {
    flex: 1,
    alignItems: 'center',
  },
  other1Button: {
    backgroundColor: '#fff',
    borderRadius: 50, // Border radius for the circular Home button
    width: 50, // Width of the circular Home button
    height: 50, // Height of the circular Home button
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

