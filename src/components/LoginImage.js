import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';
import styles from '../style/styleSheet';

export default function LoginImage() {

  return (

    <View style={styles.headerContainer}>
      <Image
          source={require('../assets/images/Logo.png')}
          style={styles.logo}
          resizeMode='cover'
      />
    </View>

  );
}