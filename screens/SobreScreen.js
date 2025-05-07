import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Imagem de fundo */}
      <ImageBackground
        source={require('../assets/SaoPaulo.jpg')}  // Adapte o caminho conforme necessário
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>Sobre o App</Text>
          <Text style={styles.description}>
            Este é um aplicativo dedicado ao São Paulo Futebol Clube, desenvolvido por Lucas Maximo.
            O objetivo do app é proporcionar uma experiência mais interativa para os fãs do Tricolor.
            Navegue por diferentes funcionalidades, como a visualização de jogos, estatísticas e muito mais!
          </Text>
          <Text style={styles.footer}>Desenvolvido por Lucas Maximo</Text>
          <Text style={styles.footer}>Versão 1.0.0</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
  backgroundImageStyle: {
    opacity: 0.3,  // Ajuste a transparência da imagem de fundo
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: 'white',  // Fundo semi-transparente para o texto
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  footer: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
    marginTop: 20,
  },
});
