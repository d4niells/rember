import React from 'react';
import { colors } from '~/styles/index';
import { Loading } from './styles';

export default function ActivityIndicator({ color, size }) {
  return (
    <Loading
      size={size ? size : 'large'}
      color={color ? color : colors.primary}
    />
  );
}
