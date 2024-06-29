import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const LoadingScreen = () => {
  const data = [
    ['Tên', 'Tuổi', 'Thành phố'],
    ['Nguyễn Văn A', '25', 'Hà Nội'],
    ['Trần Thị B', '30', 'Hồ Chí Minh'],
    ['Lê Văn C', '22', 'Đà Nẵng'],
    ['Lê Văn C', '22', 'Đà Nẵng'],
  ];

  return (
    <ScrollView>
      <View style={styles.table}>
        {data.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, cellIndex) => (
              <View key={cellIndex} style={styles.cell}>
                <Text style={styles.text}>{cell}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 2,
  },
  text: {
    fontSize: 8,
    textAlign: 'center',
  },
});

export default LoadingScreen;
