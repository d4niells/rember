import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { signInResquest } from '~/store/modules/auth/actions';

import TextInput from '~/components/TextInput';
import Button from '~/components/Button';
import logo from '~/assets/images/icon.png';

import {
  Container,
  Header,
  Image,
  Body,
  Form,
  ForgotPassword,
  Label,
  Link,
  LabelLink,
  Footer,
} from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    if (email.length === 0 || password.length === 0) {
      Alert.alert('Atenção', 'Email ou senha não pode estar vazio.');
    } else {
      dispatch(signInResquest(email, password));
    }
  };

  return (
    <Container>
      <Header>
        <Image source={logo} />
      </Header>
      <Body>
        <Form>
          <TextInput
            placeholder="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            editable={!loading}
          />

          <TextInput
            placeholder="Senha"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            editable={!loading}
            onSubmitEditing={submit}
          />

          <ForgotPassword>
            <Link onPress={() => navigation.navigate('ForgotPasswordScreen')}>
              <Label>Esqueceu sua senha?</Label>
            </Link>
          </ForgotPassword>

          <Button
            mode="contained"
            onPress={submit}
            loading={loading}
            disabled={loading}
          >
            Entrar
          </Button>
        </Form>
        <Footer>
          <Label>Não tem uma conta? </Label>
          <Link onPress={() => navigation.navigate('SignUp')}>
            <LabelLink>Inscrever-se</LabelLink>
          </Link>
        </Footer>
      </Body>
    </Container>
  );
}
