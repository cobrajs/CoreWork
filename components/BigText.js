import React from 'react';
import { Text } from 'react-native';

export default function BigText({ children }) {
  return (
    <Text style={{
      fontSize: 48,
      fontWeight: 'bold',
      fontFamily: 'monospace',
      textAlign: 'center',
      }}>
      {children}
    </Text>
  );
}
