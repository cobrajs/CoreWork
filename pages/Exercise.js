import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Exercises from '../assets/exercises';

import BigText from '../components/BigText';
import BigButton from '../components/BigButton';
import TimerButton from '../components/TimerButton';

export default function Exercise({ exercise, setExercise }) {
  const exerciseInfo = Exercises[exercise];
  console.log(exerciseInfo);

  if (!exerciseInfo) {
    return (
      <View style={styles.container}>
        <BigText> Exercise not found </BigText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BigText> {exerciseInfo.name} </BigText>
      <Text> {exerciseInfo.description} </Text>
      <View style={styles.buttons}>
        <BigButton onPress={() => setExercise((old) => old + 1)}> Pic </BigButton>
        <BigButton onPress={() => setExercise((old) => old + 1)}> Pic </BigButton>
      </View>
      <View style={styles.buttons}>
        {exerciseInfo.hold ? <TimerButton amount={exerciseInfo.hold}></TimerButton> : null}
        <BigButton onPress={() => setExercise((old) => old + 1)}> Next </BigButton>
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



