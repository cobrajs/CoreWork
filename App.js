import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Exercises from './assets/exercises';

import GetStarted from './pages/GetStarted';
import Rounds from './pages/Rounds';
import Exercise from './pages/Exercise';
import Complete from './pages/Complete';

import BigText from './components/BigText';
import BigButton from './components/BigButton';

export default function App() {
  const [started, setStarted] = useState(false);
  const [rounds, setRounds] = useState(null);
  const [exercise, setExercise] = useState(0);

  useEffect(() => {
    console.log(started, rounds, exercise);
  }, [started, rounds, exercise]);

  const resetState = () => {
    setStarted(false);
    setRounds(null);
    setExercise(null);
  };

  if (rounds !== null) {
    if (exercise > Exercises.length) {
      return <Complete reset={resetState} />;
    }

    return <Exercise exercise={exercise} setExercise={setExercise} />;
  }

  if (started === true) {
    return <Rounds setRounds={setRounds} />;
  }


  return <GetStarted setStarted={setStarted} />;
}

