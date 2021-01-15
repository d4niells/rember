import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.backgroundContainer};
  margin: 0px 15px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;

  height: 65px;
`;

export const Left = styled.View`
  flex: 1.6;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Center = styled(Left)`
  flex: 5;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px;
`;

export const Right = styled(Left)`
  flex: 1;
`;

export const ImageProfile = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.primary.secondary};
`;

export const Date = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text.secondary};
`;

export const UserName = styled.Text`
  margin-top: 10px;

  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.main};
`;

export const CardSearch = styled.View`
  margin-top: 45px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputSeach = styled.TextInput.attrs({
  placeholderTextColor: ({ theme }) => theme.text.secondary,
})`
  padding-left: 10px;

  flex: 4;
  height: 50px;
  border-radius: 15px;

  color: ${({ theme }) => theme.text.secondary};
  background-color: #fff;
`;

export const FilterButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  margin-left: 20px;

  width: 60px;
  height: 50px;
  border-radius: 15px;

  background-color: ${({ theme }) => theme.primary.secondary};
`;

export const CardResume = styled.View`
  margin-top: 45px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 200px;
`;

export const CardActive = styled.TouchableOpacity.attrs({ activeOpacity: 0.9 })`
  margin-right: 25px;

  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 120px;
  border-radius: 30px;
  ${({ active }) =>
    active
      ? css`
          box-shadow: 0px 4px 10px #6d38ffc4;
          background-color: ${({ theme }) => theme.primary.secondary};
        `
      : css`
          box-shadow: 0px 4px 10px #edf0fc;
          background-color: #ffffff;
        `};
`;

export const CardOngoing = styled(CardActive)`
  ${({ active }) =>
    active
      ? css`
          box-shadow: 0px 4px 10px #6d38ffc4;
          background-color: ${({ theme }) => theme.primary.secondary};
        `
      : css`
          box-shadow: 0px 4px 10px #edf0fc;
          background-color: #ffffff;
        `};
`;

export const CardDone = styled(CardActive)`
  margin-right: 0px;

  ${({ active }) =>
    active
      ? css`
          box-shadow: 0px 4px 10px #6d38ffc4;
          background-color: ${({ theme }) => theme.primary.secondary};
        `
      : css`
          box-shadow: 0px 4px 10px #edf0fc;
          background-color: #ffffff;
        `};
`;

export const CardResumeTitle = styled.Text`
  font-size: 30px;
  font-weight: 800;
  color: ${({ active, theme }) =>
    active ? theme.text.contrast : theme.text.secondary};
`;

export const CardResumeSubtitle = styled.Text`
  margin-top: 10px;

  font-size: 18px;
  font-weight: 500;
  color: ${({ active, theme }) =>
    active ? theme.text.contrast : theme.text.secondary};
`;
