import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import BigButton from '../components/BigButton';
import BigText from '../components/BigText';

export default function Complete({ reset }) {
  return (
    <View style={styles.container}>
      <BigText> Complete! </BigText>

      <BigButton onPress={() => reset()}> Reset </BigButton>

      {/*<StatusBar style="auto" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10%',
  },
});


