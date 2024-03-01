import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "../style/styleSheet";
import LoginBack from "../components/LoginImageBackground";

export default function App() {

  return (
    <View style={styles.container}>
      <LoginBack />
    </View>
  );
}
