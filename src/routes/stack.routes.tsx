import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Daily, NewProduct } from '../screens';

export type RootStackParamList = {
  Daily: undefined;
  NewProduct: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Daily"
        component={Daily}
      />
      <Stack.Screen
        name="NewProduct"
        component={NewProduct}
      />
    </Stack.Navigator>
  );
}
