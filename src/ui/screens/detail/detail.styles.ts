import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navigatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productQuantity: {
    marginTop: 8,
    fontSize: 14,
    color: '#555',
  },
  separator: {
    height: 10,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  backButton: {
    marginTop: 16,
    backgroundColor: '#3b7ddd',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
});