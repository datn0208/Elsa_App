import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';




const LoadingScreen = () => {
  const data = [
    ['Nguyễn Văn A', '25'],
    ['Trần Thị B', '30'],
    ['Lê Văn C', '22'],
  ];

  return (
    <ScrollView horizontal>
      <View style={styles.table}>
        {data.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {/* Cột 1: Căn trái, font và màu chữ mặc định */}
            <View style={[styles.cell, styles.leftAlign]}>
              <Text style={styles.text}>{row[0]}</Text>
            </View>
            {/* Cột 2: Căn phải, font và màu chữ thay đổi */}
            <View style={[styles.cell, styles.rightAlign]}>
              <Text style={[styles.text, styles.customText]}>{row[1]}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#000',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  leftAlign: {
    alignItems: 'flex-start', // Căn trái
  },
  rightAlign: {
    alignItems: 'flex-end', // Căn phải
  },
  text: {
    fontSize: 16,
    textAlign: 'center', // Căn chữ vào giữa ô
    fontFamily: 'Arial', // Font chữ mặc định
    color: 'black', // Màu chữ mặc định
  },
  customText: {
    fontFamily: 'Times New Roman', // Font chữ tùy chỉnh
    color: 'blue', // Màu chữ tùy chỉnh
    fontWeight: 'bold', // Font chữ đậm
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Căn giữa theo chiều dọc
    alignItems: 'center', // Căn giữa theo chiều ngang
    paddingHorizontal: 10,
  },
});

export default LoadingScreen;

