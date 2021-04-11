import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function BigButton({ onPress, children }) {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 2,
        borderColor: '#000',
        borderStyle: 'solid',
        paddingVertical: 30
      }}
      onPress={onPress}>
      <Text style={{
        fontSize: 64,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        textAlign: 'center',
      }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

