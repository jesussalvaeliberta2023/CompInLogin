import { StatusBar } from 'expo-status-bar';
import { View, TextInput } from 'react-native';
import styles from '../style/styleSheet';

export default function LoginInput() {

  return (
    
      <View style={styles.bodyContainer}>
        <TextInput 
          placeholder='Nome'
          style={styles.inputs}
          inputMode='text'
        />

        <TextInput 
          placeholder='Senha'
          keyboardType='numeric'
          secureTextEntry={true}
          style={styles.inputs}
        />
      </View>
    
  );
}
