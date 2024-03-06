//Importações Padrão
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "../style/styleSheet";
//Importações de Components
import LoginBack from "../components/LoginImageBackground";

export default function App() {

  return (
    //My background
    <View style={styles.container}>
      <LoginBack />
    </View>
  );
}
