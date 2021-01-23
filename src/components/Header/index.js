import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';

export default function Header({ scene, previous, navigation }) {
  const { options } = scene.descriptor;

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      {previous ? (
        <Appbar.BackAction onPress={navigation.pop} />
      ) : (
        <TouchableOpacity onPress={() => {}}>
          <Avatar.Image
            size={40}
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content title={options.title} subtitle={options.subtitle} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
}
