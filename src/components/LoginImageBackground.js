//Importações Padrão
import { ImageBackground } from "react-native";
import styles from "../style/styleSheet";

const LoginBack = ({ children }) => {
  return (

      //Imagem de fundo
      <ImageBackground
        source={require("../assets/images/Fundo.png")}
        style={styles.fundo}
      >
        {children}
      </ImageBackground>
  );
}

export default LoginBack
