import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signUpResquest } from '~/store/modules/auth/actions';

import TextInput from '~/components/TextInput';
import Button from '~/components/Button';

import Logo from '~/assets/images/icon.png';

import {
  Container,
  Header,
  Image,
  Body,
  Title,
  FieldsForm,
  Grid,
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
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, SetConfirmPassword] = useState('');

  const submit = () => {
    if (
      name.length === 0 ||
      lastName.lenght === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword === 0
    ) {
      Alert.alert('Atenção', 'Compos não podem ser vazios');
    } else if (password !== confirmPassword) {
      Alert.alert('Atenção', 'As senhas não coincidem.');
    } else {
      dispatch(signUpResquest({ name, lastName, email, password }));
    }
  };

  return (
    <Container>
      <Header>
        <Image source={Logo} />
      </Header>
      <Body>
        <Title>Crie sua conta grátis</Title>
        <FieldsForm>
          <Grid>
            <TextInput
              placeholder="Nome"
              returnKeyType="next"
              value={name}
              onChangeText={(text) => setName(text)}
              autoCapitalize="none"
              editable={!loading}
            />
            <TextInput
              placeholder="Sobrenome"
              returnKeyType="next"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
              autoCapitalize="none"
              editable={!loading}
            />
          </Grid>

          <TextInput
            placeholder="Digite seu email"
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
            placeholder="Senha"
            returnKeyType="next"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            editable={!loading}
          />

          <TextInput
            placeholder="Confirme sua senha"
            returnKeyType="done"
            value={confirmPassword}
            onChangeText={(text) => SetConfirmPassword(text)}
            secureTextEntry={true}
            editable={!loading}
            onSubmitEditing={submit}
          />
        </FieldsForm>
        <Button
          mode="contained"
          onPress={submit}
          loading={loading}
          disabled={loading}
        >
          Assinar
        </Button>

        <Footer>
          <Label>Você já tem uma conta? </Label>
          <Link onPress={() => navigation.navigate('SignIn')}>
            <LabelLink>Entrar</LabelLink>
          </Link>
        </Footer>
      </Body>
    </Container>
  );
}
