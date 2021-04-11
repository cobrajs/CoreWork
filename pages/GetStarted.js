import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BigButton from '../components/BigButton';

export default function GetStarted({ setStarted }) {
  return (
    <View style={styles.container}>
      <BigButton onPress={() => setStarted(true)}> Start </BigButton>

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

