import { Text, View, StyleSheet } from 'react-native';
import MiPrimerComponente from './src/components/MiPrimerComponente';
export default function App() {
  return (
    <View style={styles.main}>
      <Text>Arrancamos con RN</Text>
      <MiPrimerComponente />
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex: 1
  }
})
