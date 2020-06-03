import styled from 'styled-components/native';
import { colors } from '~/styles/index';

export const Container = styled.View`
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  bounces: false,
  automaticallyAdjustContentInsets: false,
  directionalLockEnabled: true,
  scrollToOverflowEnabled: false,
  pinchGestureEnabled: false,
  decelerationRate: 'fast',
})``;
