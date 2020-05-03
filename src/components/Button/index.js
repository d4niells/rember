import React from 'react';
import ActivityIndicator from '~/components/ActivityIndicator';
import { LargeButton, Label } from './styles';
import { colors } from '~/styles/index';
export default function Button({
  mode,
  style,
  children,
  loading = false,
  ...props
}) {
  return (
    <LargeButton mode={mode} {...props}>
      {loading ? (
        <ActivityIndicator size={'small'} color={colors.white} />
      ) : (
        <Label>{children}</Label>
      )}
    </LargeButton>
  );
}
