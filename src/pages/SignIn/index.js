import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInResquest } from '~/store/modules/auth/actions';
import TextInput from '~/components/TextInput';
import Button from '~/components/Button';
import {
  Container,
  Header,
  Body,
  Logo,
  LogoName,
  ForgotPasswordView,
  Label,
  Link,
  LabelLink,
  Footer,
} from './styles';
import { Alert } from 'react-native';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    if (email.length === 0 || password.length === 0) {
      Alert.alert('Error', 'Email our password cannot be empty.');
    } else {
      dispatch(signInResquest(email, password));
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
        <TextInput
          placeholder="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <ForgotPasswordView>
          <Link onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <Label>Forgot your password?</Label>
          </Link>
        </ForgotPasswordView>

        <Button mode="contained" onPress={submit}>
          Login
        </Button>
      </Body>
      <Footer>
        <Label>Don’t have an account? </Label>
        <Link onPress={() => {}}>
          <LabelLink>Sign up</LabelLink>
        </Link>
      </Footer>
    </Container>
  );
}
