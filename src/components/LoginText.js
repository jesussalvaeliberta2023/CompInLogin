//Importações
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from '../style/styleSheet';

export default function LoginText() {

  return (

      //Welcome
      <View style={styles.bodyContainer}>
        <Text style={styles.myName} >Faça seu login pra entrar</Text>
      </View>
    
  );
}
