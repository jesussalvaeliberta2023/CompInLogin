//Importações Padrão
import { StatusBar } from "expo-status-bar";
import { View, ImageBackground } from "react-native";
import styles from "../style/styleSheet";
//Importações de Components
import LoginButton from "../components/LoginButton";
import LoginImage from "../components/LoginImage";
import LoginInput from "../components/LoginInput";
import LoginText from "../components/LoginTH";
import LoginTextt from "../components/LoginText";
import LoginTexttt from "../components/LoginTF";

export default function LoginImageBackground() {
  return (

      //Imagem de fundo
      <ImageBackground
        source={require("../assets/images/Fundo.png")}
        style={styles.fundo}
      >
        <View style={styles.container}>
          {/* Meu body/Outros Components */}
          <LoginImage/>
          <LoginText/>
          <LoginTextt/>
          <LoginInput/>
          <LoginButton/>
          <LoginTexttt/>
        </View>
      </ImageBackground>
    
  );
}
