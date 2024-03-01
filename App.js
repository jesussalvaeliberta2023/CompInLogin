import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./src/style/styleSheet";
import Login from "./src/pages/Login";

export default function App() { 
  return (
    
      <View style={styles.container}>
          <Login></Login>
      </View>

  );
}