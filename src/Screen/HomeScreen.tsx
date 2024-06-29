import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


// Define props for the HomeScreen component
type Props = {
  navigation: any; // Replace with specific navigation prop type if available
};

// Functional component for the HomeScreen
const HomeScreen: React.FC<Props> = ({ navigation }) => {
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxx BEGIN ĐỌC TỐC ĐỘ
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  // Giả sử nhiệt độ là một state, bạn có thể cập nhật từ cảm biến hoặc dữ liệu khác
  const [speed, setSpeed] = useState(undefined); // Giả sử nhiệt độ là 25 độ C

  useEffect(() => {
    // Làm một số công việc như cập nhật nhiệt độ từ cảm biến
    // Ví dụ: fetch API, lấy dữ liệu từ cảm biến
  }, []); // Thay đổi dependencies tùy thuộc vào cách bạn lấy dữ liệu

     // Hàm xử lý khi nhiệt độ không đọc được
  const SpeedContent = () => {
    if (speed === undefined || speed === null) {
      return (
        <View style={styles.speedContainer}>

        <Text style={styles.iconSpeed}>0</Text>
          
        </View>
      );
    } else {
      return (
        <View style={styles.speedContainer}>
          <Text style={styles.textSpeed}>{speed}g/m3</Text>
        </View>
      );
    }
  };
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxx END ĐỌC TỐC ĐỘ
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxx BEGIN ĐỌC NHIÊN LIỆU
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  // Giả sử nhiệt độ là một state, bạn có thể cập nhật từ cảm biến hoặc dữ liệu khác
  const [fuel, setFuel] = useState(undefined); // Giả sử nhiệt độ là 25 độ C

  useEffect(() => {
    // Làm một số công việc như cập nhật nhiệt độ từ cảm biến
    // Ví dụ: fetch API, lấy dữ liệu từ cảm biến
  }, []); // Thay đổi dependencies tùy thuộc vào cách bạn lấy dữ liệu

     // Hàm xử lý khi nhiệt độ không đọc được
  const FuelContent = () => {
    if (fuel === undefined || fuel === null) {
      return (
        <View style={styles.fuelContainer}>
          <Image
            source={require('/home/nguyen/android_project/Elsa_App/assets/image/temperature_icon.png')}
            style={styles.iconFuel}
          />
          
        </View>
      );
    } else {
      return (
        <View style={styles.fuelContainer}>
          <Text style={styles.textFuel}>{fuel}°C</Text>
        </View>
      );
    }
  };
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxx END ĐỌC NHIÊN LIỆU
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 


//------------------------------------------------------------------------
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxx BEGIN ĐỌC ĐỘ ẨM
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  // Giả sử nhiệt độ là một state, bạn có thể cập nhật từ cảm biến hoặc dữ liệu khác
  const [humidity, setHumidity] = useState(undefined); // Giả sử nhiệt độ là 25 độ C

  useEffect(() => {
    // Làm một số công việc như cập nhật nhiệt độ từ cảm biến
    // Ví dụ: fetch API, lấy dữ liệu từ cảm biến
  }, []); // Thay đổi dependencies tùy thuộc vào cách bạn lấy dữ liệu

     // Hàm xử lý khi nhiệt độ không đọc được
  const HumidityContent = () => {
    if (humidity === undefined || humidity === null) {
      return (
        <View style={styles.weatherContainerRight}>
          <Image
            source={require('/home/nguyen/android_project/Elsa_App/assets/image/temperature_icon.png')}
            style={styles.iconRight}
          />
          
        </View>
      );
    } else {
      return (
        <View style={styles.weatherContainerRight}>
          <Text style={styles.humidityRight}>{humidity}g/m3</Text>
        </View>
      );
    }
  };
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxx END ĐỌC ĐỘ ẨM
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxx BEGIN ĐỌC NHIỆT ĐỘ
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  // Giả sử nhiệt độ là một state, bạn có thể cập nhật từ cảm biến hoặc dữ liệu khác
  const [temperature, setTemperature] = useState(undefined); // Giả sử nhiệt độ là 25 độ C

  useEffect(() => {
    // Làm một số công việc như cập nhật nhiệt độ từ cảm biến
    // Ví dụ: fetch API, lấy dữ liệu từ cảm biến
  }, []); // Thay đổi dependencies tùy thuộc vào cách bạn lấy dữ liệu

     // Hàm xử lý khi nhiệt độ không đọc được
  const TemperatureContent = () => {
    if (temperature === undefined || temperature === null) {
      return (
        <View style={styles.weatherContainerLeft}>
          <Image
            source={require('/home/nguyen/android_project/Elsa_App/assets/image/temperature_icon.png')}
            style={styles.iconLeft}
          />
          
        </View>
      );
    } else {
      return (
        <View style={styles.weatherContainerLeft}>
          <Text style={styles.temperatureLeft}>{temperature}°C</Text>
        </View>
      );
    }
  };
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxx END ĐỌC NHIỆT ĐỘ
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxx BEGIN CẬP NHẬT NN/MM/YY
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
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
    // const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    const day = currentTime.getDate().toString().padStart(2, '0');
    const month = (currentTime.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0, cần +1 để lấy tháng đúng
    const year = currentTime.getFullYear();
    return `${hours}:${minutes} - ${day}/${month}/${year}`;
  };
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxx END CẬP NHẬT NN/MM/YY
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxx BEGIN NHẬP BẢNG GIÁ TRỊ
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const dataTable1 = [
    ['Biển số xe:', '77H1-52546',],
    ['Thời gian máy chủ:', formattedTime()],
    ['Thời gian trên board:', formattedTime()],
    ['Độ mạnh sóng:', '100% (46)'],
    
  ];
  const dataTable4 = [
    ['Trạng thái:', 'GPS yếu'],
  ];
  const dataTable2 = [
    ['SIM:', formattedTime()],
    ['SD Card:', '30(kb)'],
    ['Mã tài xế:', 'IoTVision'],
    ['GPLX:', 'IoTVision'],
  ];
  const dataTable3 = [
    ['Trạng thái làm việc:', 'Đang tập trung'],
  ];
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//xxx END NHẬP BẢNG GIÁ TRỊ
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

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

          {/* Cập nhật trạng thái bảng table1 */} 
          <View style={styles.table}>
            {dataTable1.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
              {/* Cột 1: Căn trái */}
              <View style={[styles.cell, styles.leftAlign1]}>
                <Text style={styles.textLeftAlign1}>{row[0]}</Text>
              </View>
              {/* Cột 2: Căn phải */}
              <View style={[styles.cell, styles.rightAlign1]}>
                <Text style={styles.textRightAlign1}>{row[1]}</Text>
              </View>
            </View>
            ))}
          </View>  
          
          {/* Cập nhật trạng thái bảng table4 */} 
          <View style={styles.table}>
            {dataTable4.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
              {/* Cột 1: Căn trái */}
              <View style={[styles.cell, styles.leftAlign4]}>
                <Text style={styles.textLeftAlign4}>{row[0]}</Text>
              </View>
              {/* Cột 2: Căn phải */}
              <View style={[styles.cell, styles.rightAlign4]}>
                <Text style={styles.textRightAlign4}>{row[1]}</Text>
              </View>
            </View>
            ))}
          </View>

          {/* Cập nhật trạng thái bảng table2 */} 
          <View style={styles.table}>
            {dataTable2.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
              {/* Cột 1: Căn trái */}
              <View style={[styles.cell, styles.leftAlign2]}>
                <Text style={styles.textLeftAlign2}>{row[0]}</Text>
              </View>
              {/* Cột 2: Căn phải */}
              <View style={[styles.cell, styles.rightAlign2]}>
                <Text style={styles.textRightAlign2}>{row[1]}</Text>
              </View>
            </View>
            ))}
          </View>    

          {/* Cập nhật trạng thái bảng table3 */} 
          <View style={styles.table}>
            {dataTable3.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
              {/* Cột 1: Căn trái */}
              <View style={[styles.cell, styles.leftAlign3]}>
                <Text style={styles.textLeftAlign3}>{row[0]}</Text>
              </View>
              {/* Cột 2: Căn phải */}
              <View style={[styles.cell, styles.rightAlign3]}>
                <Text style={styles.textRightAlign3}>{row[1]}</Text>
              </View>
            </View>
            ))}
          </View>    
          {/* đường line phân cách*/} 
          <View style={styles.line1}></View>  

          {/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
             xxxx BEGIN ĐỌC NHIỆT ĐỘ            
             xxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}
          <View style={styles.weatherContainerLeft}>
            <Text style={styles.temperatureLeft}>Nhiệt độ (°C)</Text>
            {TemperatureContent()}
          </View>
          {/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
             xxxx END ĐỌC NHIỆT ĐỘ            
             xxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}

          {/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
             xxxx BEGIN ĐỌC ĐỘ ẨM           
             xxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}
          <View style={styles.weatherContainerRight}>
            <Text style={styles.humidityRight}>Độ ẩm (g/m3)</Text>
            {HumidityContent()}
          </View>
          {/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
             xxxx END ĐỌC ĐỘ ẨM          
             xxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}
          {/* đường line phân cách*/} 
          <View style={styles.line2}></View> 
          {/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
             xxxx BEGIN ĐỌC NHIỆT ĐỘ            
             xxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}
          <View style={styles.fuelContainer}>
            <Text style={styles.textFuel}>Nhiên Liệu (lít)</Text>
            {SpeedContent()}
          </View>
          {/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
             xxxx END ĐỌC NHIỆT ĐỘ            
             xxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}

          {/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
             xxxx BEGIN ĐỌC ĐỘ ẨM           
             xxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}
          <View style={styles.speedContainer}>
            <Text style={styles.textSpeed}>Tốc độ (km/h)</Text>
            {FuelContent()}
          </View>
          {/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
             xxxx END ĐỌC ĐỘ ẨM          
             xxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/}
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
  speedContainer: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    top: 50,
    left:110,
  },
  iconSpeed: {
    bottom:35,
    left:58,
    width: 40,
    height: 40,
    
    fontSize:28,
    fontFamily: 'digital-clock-font',
    color:'#ff6347',
    
  },
  textSpeed: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00008b',
    top:143,
    right:20,
  },

//--------------------------------------------
  fuelContainer: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    top: 60,
    right:70,
  },
  iconFuel: {
    top:12,
    right:140,
    width: 40,
    height: 40,
    
  },
  textFuel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00008b',
    top:90,
    right:20,
  },

  //-----------------------------------------------------------
  line2: {
    
    width: '100%', // Chiều rộng 100% của parent
    height: 2.2, // Độ dài 1 pixel
    backgroundColor: 'gray', // Màu sắc đường line
    marginVertical: 10, // Khoảng cách dọc từ đường line đến các phần tử xung quanh
  },

  weatherContainerRight: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    top: 10,
    left:110,
  },
  iconRight: {
    bottom:10,
    right:131,
    width: 40,
    height: 40,
    
  },
  humidityRight: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00008b',
    top:71.8,
    right:20,
  },
//------------------------------------------------------------------
  weatherContainerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 10,
    left:30,
  },
  iconLeft: {
    top:30,
    right:110,
    width: 40,
    height: 40,
    
  },
  temperatureLeft: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00008b',

  },
  line1: {
    top:10,
    width: '100%', // Chiều rộng 100% của parent
    height: 3, // Độ dài 1 pixel
    backgroundColor: '#4169e1', // Màu sắc đường line
    marginVertical: 10, // Khoảng cách dọc từ đường line đến các phần tử xung quanh
  },
  leftAlign3: {
    alignItems: 'flex-end', // Căn trái
  },
  rightAlign3: {
    alignItems: 'flex-start', // Căn phải
  },
  textLeftAlign3: {
    fontSize: 12,
    textAlign: 'center', // Căn chữ vào giữa ô
    color:'black',
    
  },
  textRightAlign3: {
    fontSize: 12,
    textAlign: 'center', // Căn chữ vào giữa ô
    color:'#2e8b57',
    left:5,
    fontWeight: 'bold', // Văn bản in đậm
  },
  leftAlign2: {
    alignItems: 'flex-end', // Căn trái
  },
  rightAlign2: {
    alignItems: 'flex-start', // Căn phải
  },
  textLeftAlign2: {
    fontSize: 12,
    textAlign: 'center', // Căn chữ vào giữa ô
    color:'black',
    
  },
  textRightAlign2: {
    fontSize: 12,
    textAlign: 'center', // Căn chữ vào giữa ô
    color:'black',
    left:5,
  },
  leftAlign4: {
    alignItems: 'flex-end', // Căn trái
  },
  rightAlign4: {
    alignItems: 'flex-start', // Căn phải
  },
  textLeftAlign4: {
    fontSize: 12,
    textAlign: 'center', // Căn chữ vào giữa ô
    color:'black',
    
  },
  textRightAlign4: {
    fontSize: 12,
    textAlign: 'center', // Căn chữ vào giữa ô
    color:'gray',
    left:5,
    fontWeight: 'bold', // Văn bản in đậm
  },
  leftAlign1: {
    alignItems: 'flex-end', // Căn trái
  },
  rightAlign1: {
    alignItems: 'flex-start', // Căn phải
  },
  textLeftAlign1: {
    fontSize: 12,
    textAlign: 'center', // Căn chữ vào giữa ô
    color:'black',
    
  },
  textRightAlign1: {
    top:5,
    fontSize: 12,
    textAlign: 'center', // Căn chữ vào giữa ô
    color:'#ff6347',
    left:5,
    fontFamily: 'digital-clock-font',
     // Sử dụng font-family đã liên kết
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
    height:560,   
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

