import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

function SettingsScreen() {

  const handleLogout = () => {
    Alert.alert("Você saiu!", "Deslogado com sucesso.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      {/* Configuração para alterar a senha */}
      <TouchableOpacity style={styles.settingOption} onPress={() => Alert.alert('Alterar Senha')}>
        <Text style={styles.settingText}>Alterar Senha</Text>
      </TouchableOpacity>

      {/* Configuração para notificações */}
      <TouchableOpacity style={styles.settingOption} onPress={() => Alert.alert('Notificações')}>
        <Text style={styles.settingText}>Notificações</Text>
      </TouchableOpacity>

      {/* Configuração para mudar tema */}
      <TouchableOpacity style={styles.settingOption} onPress={() => Alert.alert('Mudar Tema')}>
        <Text style={styles.settingText}>Mudar Tema</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black', 
    textAlign: 'center',
    marginVertical: 30,
  },
  settingOption: {
    backgroundColor: '#C8102E', 
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  settingText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#C8102E', 
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 30,
  },
  logoutButtonText: {
    color: 'white', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SettingsScreen;
