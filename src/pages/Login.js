//Importações Padrão
import { View } from "react-native";
import styles from "../style/styleSheet";
//Importações de Components
import LoginBack from "../components/LoginImageBackground";
//Importações de Components
import LoginButton from "../components/LoginButton";
import LoginImage from "../components/LoginImage";
import LoginInput from "../components/LoginInput";
import LoginText from "../components/LoginTH";
import LoginTextt from "../components/LoginText";
import LoginTexttt from "../components/LoginTF";

export default function Login() {

  return (
    //My background
    <View style={styles.container}>
      <View style={styles.container}>
          {/* Meu body/Outros Components */}
          <LoginBack>
            <LoginImage/>
            <LoginText/>
            <LoginTextt/>
            <LoginInput/>
            <LoginButton/>
            <LoginTexttt/>
          </LoginBack>
        </View>
    </View>
  );
}
