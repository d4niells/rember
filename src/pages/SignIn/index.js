import React, { useState } from 'react';
import TextInput from '~/components/TextInput';
import Button from '~/components/Button';
import { emailValidator, passwordValidator } from '~/utils/validator';
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

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const submit = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.navigate('Home');
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
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
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
