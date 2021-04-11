import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BigText from '../components/BigText';
import BigButton from '../components/BigButton';

export default function Rounds({ setRounds }) {
  return (
    <View style={styles.container}>
      <BigText> Rounds </BigText>
      <View style={styles.buttons}>
        <BigButton onPress={() => setRounds(2)}> 2 </BigButton>
        <BigButton onPress={() => setRounds(3)}> 3 </BigButton>
      </View>

      {/*<StatusBar style="auto" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});


