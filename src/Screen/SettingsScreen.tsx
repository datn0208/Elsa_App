import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Define the type for device objects
type Device = {
  id: number;
  name: string;
  status: 'ON' | 'OFF'; // Status can only be 'ON' or 'OFF'
};

// Define props for the HomeScreen component
type Props = {
  navigation: any; // Replace with specific navigation prop type if available
};

// Functional component for the HomeScreen
const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  // Function to handle device press
  const handleDevicePress = (deviceId: number) => {
    console.log(`Device ${deviceId} pressed.`);
  };

  // Sample device list
  const devices: Device[] = [
    { id: 1, name: 'Device 1', status: 'ON' },
    { id: 2, name: 'Device 2', status: 'OFF' },
    { id: 3, name: 'Device 3', status: 'ON' },
    { id: 4, name: 'Device 4', status: 'OFF' },
  ];

  // Function to truncate text if too long
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <View style={styles.container}>
      {/* Title of the HomeScreen */}
      <Text style={styles.title}>Home Screen - Control & Monitor</Text>

      {/* Device list */}
      <View style={styles.deviceContainer}>
        {devices.map((device) => (
          <TouchableOpacity
            key={device.id}
            style={styles.deviceItem}
            onPress={() => handleDevicePress(device.id)}>
            <Text style={styles.deviceName}>{device.name}</Text>
            <Text style={styles.deviceStatus}>Status: {device.status}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Navigation buttons */}
      <View style={styles.bottomNavigation}>
        {/* Chart navigation button */}
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Charts')}>
          <Icon name="bar-chart" size={20} color="#fff" />
          <Text style={styles.navigationButtonText}>Charts</Text>
        </TouchableOpacity>

        {/* OtherScreen2 navigation button */}
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Alarm')}>
          <Icon name="bell" size={20} color="#fff" />
          <Text style={styles.navigationButtonText}>Alarm</Text>
        </TouchableOpacity>

        {/* Home navigation button */}
        <View style={styles.centeredNavigationButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.other1Button}>
            <Icon name="home" size={22} color="#1e90ff" />
          </TouchableOpacity>
        </View>

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
          <Icon name="cog" size={24} color="#ff6347" />
          <Text style={styles.navigationButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for the HomeScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20, // Horizontal padding for the container
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, // Margin bottom for the title
    color: '#333',
  },
  deviceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20, // Margin bottom for the device list container
  },
  deviceItem: {
    backgroundColor: '#fff',
    paddingHorizontal: 20, // Horizontal padding for each device item
    paddingVertical: 10, // Vertical padding for each device item
    margin: 10, // Margin around each device item
    width: 100, // Width of each device item
    height: 100, // Height of each device item
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Border radius for each device item
    borderWidth: 1, // Border width for each device item
    borderColor: '#ccc', // Border color for each device item
    shadowColor: '#000', // Shadow color for each device item
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for each device item
    shadowOpacity: 0.3, // Shadow opacity for each device item
    shadowRadius: 2, // Shadow radius for each device item
    elevation: 5, // Elevation for Android shadow
  },
  deviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'center',
  },
  deviceStatus: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
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

export default SettingsScreen;