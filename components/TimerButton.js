import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import BigButton from '../components/BigButton';

export default function TimerButton({ amount }) {
  const [timer, setTimer] = useState(null);

  let timerId = null;
  let background = '#fff';

  const tickTimer = () => {
    if (timer > 0) {
      setTimer(old => old - 1);
    } else {
      setTimer(null);
      clearTimeout(timerId);
    }
  };

  useEffect(() => {
    if (!timerId) {
      timerId = setTimeout(tickTimer, 500);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [timer]);

  useEffect(() => {
    if (timer !== null) {
      const percent = Math.floor(timer / amount * 100);
      background = `linear-gradient (to left, #000, #000 ${percent}%, #fff ${percent}%, #fff)`;
    } else {
      background = '#fff';
    }
  }, [timer]);

  return (
    <TouchableOpacity
      style={{
        borderWidth: 2,
        borderColor: '#000',
        borderStyle: 'solid',
        background: background,
      }}
      onPress={setTimer(amount)}>
    </TouchableOpacity>
  );
}
