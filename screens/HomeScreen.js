import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function NewsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notícias do Tricolor</Text>
      <FlatList
        data={newsData}
        renderItem={({ item }) => <NewsItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

// Dados fake simulando notícias do São Paulo FC
const newsData = [
  { id: '1', title: 'São Paulo vence clássico no Morumbi', description: 'Com gol de Calleri, Tricolor bate rival por 1x0.' },
  { id: '2', title: 'São Paulo vence segue invicto a 12 jogos na Libertadores !', description: 'Contra a Alianz Alima São Paulo vence de 2x0 .' },
  { id: '3', title: 'Novo uniforme é lançado', description: 'São Paulo apresenta novo manto com design retrô.' },
  { id: '4', title: 'Treinamento forte no CT da Barra Funda', description: 'Equipe se prepara para confronto decisivo no Brasileirão.' },
  { id: '5', title: 'Reforço confirmado!', description: 'Tricolor fecha com meia argentino para temporada.' },
  { id: '6', title: 'Ingressos esgotados!', description: 'Torcida tricolor lotará o Morumbi no próximo jogo.' },
];

const NewsItem = ({ item }) => (
  <View style={styles.newsItem}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fundo preto
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff', // Título branco
    textAlign: 'center',
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  newsItem: {
    backgroundColor: '#fff', // Cartão branco
    borderLeftWidth: 5,
    borderLeftColor: '#C8102E', // Faixa vermelha lateral
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Título preto
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#333', // Texto cinza escuro
  },
});
