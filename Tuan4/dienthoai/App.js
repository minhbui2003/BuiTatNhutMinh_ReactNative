import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import vsBlueImage from './vs_blue.png';

const App = () => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      backgroundColor: '#f5f5f5',
    }}>
      <Image
        source={vsBlueImage}
        style={{
          width: 200,
          height: 300,
          resizeMode: 'contain',
          marginBottom: 16,
        }}
      />
      <Text style={{
        
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
      }}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <Text style={{
        fontSize: 16,
        color: '#888',
        marginBottom: 4,
      }}>
        ★★★★☆ (Xem 828 đánh giá)
      </Text>
      <Text style={{
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 4,
      }}>
        1.790.000 đ
      </Text>
      <Text style={{
        textDecorationLine: 'line-through',
        color: '#888',
        marginBottom: 16,
      }}>
        1.790.000 đ
      </Text>

      <TouchableOpacity style={{
        backgroundColor: '#ff5722',
        padding: 12,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
        marginBottom: 10,
      }}>
        <Text style={{
          color: '#fff',
          fontWeight: 'bold',
        }}>
          Chọn Mua
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{
        backgroundColor: '#2196F3',
        padding: 12,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
      }}>
        <Text style={{
          color: '#fff',
          fontWeight: 'bold',
        }}>
          4 Màu - Chọn Màu
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
