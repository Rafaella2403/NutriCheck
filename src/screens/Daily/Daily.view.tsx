import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { RootStackParamList } from '../../routes/stack.routes';

const Daily = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

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
        Daily
      </Text>
      <Button
        title='Adicionar produto'
        onPress={() => navigate('NewProduct')}
      />
    </View>
  );
};

export default Daily;