import { StatusBar } from 'expo-status-bar';
import { View, Button } from 'react-native';
import styles from '../style/styleSheet';

export default function LoginButton() {

  pressButton = () => {
    alert("Uhm essa função ainda não está pronta :' (")
  }

  return (

      <View style={styles.bodyContainer}>
        <Button
          title='Entrar'
          color= 'blue'
          onPress={pressButton}
        />
      </View>
    
  );
}
