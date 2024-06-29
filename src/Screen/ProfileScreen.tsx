import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Define props for the HomeScreen component
type Props = {
  navigation: any; // Replace with specific navigation prop type if available
};

// Functional component for the HomeScreen
const ProfileScreen: React.FC<Props> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      {/* Title of the HomeScreen */}
      <Text style={styles.title}>Home Screen - Control & Monitor</Text>

      {/* Navigation buttons */}
      <View style={styles.bottomNavigation}>
        {/* Other 1 navigation button */}
        <View style={styles.centeredNavigationButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.other1Button}>
            <Icon name="home" size={22} color="#4267B2" />
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
          <Icon name="user" size={24} color="#ff6347" />
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

export default ProfileScreen;
