import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView ,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


// Define props for the HomeScreen component
type Props = {
  navigation: any; // Replace with specific navigation prop type if available
};

// Functional component for the HomeScreen
const HomeScreen: React.FC<Props> = ({ navigation }) => {
  // Function to truncate text if too long
  
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  const formattedTime = () => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };
  return (  
    <View style={styles.container}>
    {/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
       xxx  BEGIN THÀNH LẬP TRANG CHO TỪNG TAG FUNCTION
       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}
      <ScrollView contentContainerStyle={styles.pageContainer}>
        {/* Cập nhật trạng thái hệ thống */}
        <View style={styles.page}>
          <Text style={styles.pageTitle}>Temperature Trends</Text>
            <View style={styles.clockContainer}>
              <Text style={styles.clockText}>Thời gian:</Text>
              <Text style={styles.clockText}>{formattedTime()}</Text>
            </View>
            <View style={styles.clockContainer}>
              <Text style={styles.pageTitle}>Temperature Trends</Text>
            </View>
        </View>     

        <View style={styles.page}>
          <Text style={styles.pageTitle}>Temperature Trends</Text>
            <View style={styles.clockContainer}>
              <Text style={styles.clockText}>Thời gian:</Text>
              <Text style={styles.clockText}>{formattedTime()}</Text>
            </View>
            <View style={styles.clockContainer}>
              <Text style={styles.pageTitle}>Temperature Trends</Text>
            </View>
        </View>  

        <View style={styles.page}>
          <Text style={styles.pageTitle}>Temperature Trends</Text>
            <View style={styles.clockContainer}>
              <Text style={styles.clockText}>Thời gian:</Text>
              <Text style={styles.clockText}>{formattedTime()}</Text>
            </View>
            <View style={styles.clockContainer}>
              <Text style={styles.pageTitle}>Temperature Trends</Text>
            </View>
        </View>     
      </ScrollView>
    {/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
       xxx  END THÀNH LẬP TRANG CHO TỪNG TAG FUNCTION
       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}


    {/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
       xxx  BEGIN NÚT ĐIỀU HƯỚNG CÁC SCREEN
       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}
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
      {/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
       xxx  END NÚT ĐIỀU HƯỚNG CHO CÁC SCREEN
       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}
    </View>
  );
};

// Styles for the HomeScreen component
const styles = StyleSheet.create({
  clockContainer: {
    position: 'absolute',
    top: 10, // Adjust top position as needed
    right: 10, // Adjust right position as needed
    
  },
  clockText: {
    fontSize: 14, // Change fontSize here
    fontWeight: 'bold',
    color: '#333',
  },
  pageContainer: {
    flexGrow: 1,
    width: '100%',
    paddingTop: 10, // Adjusted vertical padding for the charts
    paddingBottom: 85, // Adjusted vertical padding for the charts
  },
  page: {
    backgroundColor: '#fff',
    paddingHorizontal: 110, // Horizontal padding for each chart
    paddingVertical: 110, // Vertical padding for each chart
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
  pageTitle: {
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

