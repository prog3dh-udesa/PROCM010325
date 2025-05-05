import { Text, View, StyleSheet } from 'react-native';
import MiPrimerComponente from './src/components/MiPrimerComponente';
import Home from './src/screens/Home';
export default function App() {
  return (
    <View style={styles.main}>
      <Text>Arrancamos con RN</Text>
      {/* <MiPrimerComponente /> */}
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex: 1
  }
})
