import React from 'react';
import { Button, View } from 'react-native';

import styles from './Daily.style';
import useDaily from './useDaily';

const Daily = () => {
  const { handleNextPage } = useDaily();

  return (
    <View style={styles.container}>
      <Button
        title='Próxima tela'
        onPress={handleNextPage}
      />
    </View>
  );
};

export default Daily;