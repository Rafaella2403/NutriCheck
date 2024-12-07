import React from 'react';
import { Text, View } from 'react-native';

const NewProduct = () => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }}>
      <Text
        style={{
          color: 'white',
          fontSize: 25,
          fontWeight: 500,
        }}
      >
        NewProduct
      </Text>
    </View>
  );
};

export default NewProduct;
