import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView ,Image} from 'react-native';
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
  // thiết lập gía trị bảng table
  const data = [
  ['Biển số xe:', '77H1-52546',],
    ['Thời gian máy chủ:', formattedTime()],
    ['Thời gian trên board:', '30'],
    ['Độ mạnh sóng:', '22'],
    ['Trạng thái:', '22'],
  ];
  return (  
    <View style={styles.container}>
{/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  xxx  BEGIN THÀNH LẬP TRANG CHO TỪNG TAG FUNCTION
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}
      <ScrollView contentContainerStyle={styles.pageContainer}>
        {/* Cập nhật trạng thái hệ thống */}
        <View style={styles.page}> 
          <Image source={require('/home/nguyen/android_project/Elsa_App/assets/image/Logo_IoTVisionc_Final_01.png')} style={styles.logo} />             
          <View style={styles.clockContainer}>
            
            <Text style={styles.clockText}>{formattedTime()}</Text>
          </View>
          {/* Cập nhật trạng thái bảng table */} 
          <View style={styles.table}>
            {data.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
              {/* Cột 1: Căn trái */}
              <View style={[styles.cell, styles.leftAlign]}>
                <Text style={styles.textLeftAlign}>{row[0]}</Text>
              </View>
              {/* Cột 2: Căn phải */}
              <View style={[styles.cell, styles.rightAlign]}>
                <Text style={styles.textRightAlign}>{row[1]}</Text>
              </View>
            </View>
            ))}
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

        {/* Charts navigation Charts */}
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Charts')}>
          <Icon name="bar-chart" size={20} color="#fff" />
          <Text style={styles.navigationButtonText}>Charts</Text>
        </TouchableOpacity>

        {/* Alarm navigation Alarm */}
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Alarm')}>
          <Icon name="bell" size={20} color="#fff" />
          <Text style={styles.navigationButtonText}>Alarm</Text>
        </TouchableOpacity>

        {/* Profile navigation Profile */}
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Profile')}>
          <Icon name="user" size={20} color="#fff" />
          <Text style={styles.navigationButtonText}>Profile</Text>
        </TouchableOpacity>

        {/* Settings navigation Settings */}
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.navigate('Settings')}>
          <Icon name="cog" size={20} color="#fff" />
          <Text style={styles.navigationButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
{/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  xxx  END NÚT ĐIỀU HƯỚNG CÁC SCREEN
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}
    </View>
  );
};

// Styles for the HomeScreen component
const styles = StyleSheet.create({
  leftAlign: {
    alignItems: 'flex-end', // Căn trái
  },
  rightAlign: {
    alignItems: 'flex-start', // Căn phải
  },
  textLeftAlign: {
    fontSize: 12,
    textAlign: 'center', // Căn chữ vào giữa ô
    color:'black',
  },
  textRightAlign: {
    fontSize: 12,
    textAlign: 'center', // Căn chữ vào giữa ô
    color:'#0000cd',
  },
  table: {
    width: 350,
    
    top: 13,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 2,
  },
  logo:{
    width: 150, //điêu chỉnh kích thước logo tùy theo yêu cầu
    height: 40,
    marginBottom: 10,
    top:10,
    left:10,
  },
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
    // khổ page
    width: 352,
    height:352,   
    // vị trí
    backgroundColor: '#fff',
    marginBottom: 25, // Margin bottom for each chart
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
    marginLeft: 20, // Margin bottom for the chart title
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

