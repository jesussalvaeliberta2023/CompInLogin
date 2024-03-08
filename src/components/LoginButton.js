//Importações
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from '../style/styleSheet';

export default function LoginButton() {

  pressButton = () => {
    alert("Uhm essa função ainda não está pronta :' (")
  }

  return (

      //Botão
      <View style={styles.bodyContainer}>
        <TouchableOpacity onPress={pressButton} style={styles.botao}>
          <Image
            source={require('../assets/images/Star.png')}
            style={styles.star}
            resizeMode='cover'
          />
          <Text style={styles.textb}>Enter</Text>
          <Image
            source={require('../assets/images/Star.png')}
            style={styles.starr}
            resizeMode='cover'
          />
        </TouchableOpacity>
      </View>
    
  );
}
