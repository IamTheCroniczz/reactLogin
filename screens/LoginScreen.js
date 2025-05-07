import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === 'aluno' && password === 'Senai1234') {
      navigation.navigate('Home');
    } else if (username === 'root' && password === 'root') {
      navigation.navigate('AdminHome');
    } else {
      setErrorMessage('Usuário ou senha incorretos.');
      setTimeout(() => setErrorMessage(''), 2000);
    }
  };

  const Register = () => {
    navigation.navigate('Cadastro');
  };

  const ForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo no topo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/Design sem nome (1).png')}
          style={styles.logo}
        />
      </View>

      {/* Título */}
      <Text style={styles.title}>Bem-vindo ao São Paulo Futebol Clube!</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <TouchableOpacity onPress={Register}>
        <Text style={styles.link}>Cadastre-se</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ForgotPassword}>
        <Text style={styles.link}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 300, // Tamanho ajustado pra não ficar exagerado
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  loginButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: '#3C2415',
    textAlign: 'center',
    marginTop: 10,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});
