import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpResquest } from '~/store/modules/auth/actions';
import TextInput from '~/components/TextInput';
import Button from '~/components/Button';
import {
  Container,
  Header,
  Body,
  Logo,
  LogoName,
  FieldsForm,
  Label,
  Link,
  LabelLink,
  Footer,
} from './styles';
import { Alert } from 'react-native';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    if (email.length === 0 || password.length === 0 || name.length === 0) {
      Alert.alert('Error', 'Fields Cannot be empty.');
    } else {
      dispatch(signUpResquest({ name, email, password }));
    }
  };

  return (
    <Container>
      <Header>
        <Logo>
          <LogoName>Rember</LogoName>
        </Logo>
      </Header>
      <Body>
        <FieldsForm>
          <TextInput
            placeholder="Name"
            returnKeyType="next"
            value={name}
            onChangeText={(text) => setName(text)}
            autoCapitalize="none"
            autoCompleteType="name"
            editable={!loading}
          />
          <TextInput
            placeholder="Email"
            returnKeyType="next"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            editable={!loading}
          />

          <TextInput
            placeholder="Password"
            returnKeyType="done"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            editable={!loading}
          />
        </FieldsForm>
        <Button mode="contained" onPress={submit} loading={loading}>
          Sing Up
        </Button>
      </Body>
      <Footer>
        <Label>Alredy have an account? </Label>
        <Link onPress={() => navigation.navigate('SignIn')}>
          <LabelLink>Login</LabelLink>
        </Link>
      </Footer>
    </Container>
  );
}
