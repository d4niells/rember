import React from 'react';
import { LargeButton, Label } from './styles';
export default function Button({ mode, style, children, ...props }) {
  return (
    <LargeButton mode={mode} {...props}>
      <Label>{children}</Label>
    </LargeButton>
  );
}
