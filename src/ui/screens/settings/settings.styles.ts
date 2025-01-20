import { StyleSheet } from 'react-native';

export const settingsStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Colore di sfondo leggero
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
    textAlign: 'center',
  },
  optionContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3, // Ombra per Android
    shadowColor: '#000', // Ombra per iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  optionText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
  logoutButton: {
    marginTop: 24,
    backgroundColor: '#ff4d4d', // Rosso acceso per il logout
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
