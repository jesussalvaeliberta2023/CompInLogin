import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bodyContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '100',
  },

  headerContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 70,
  },

  welcome: {
    color: '#0C052B',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },

  copyright: {
    color: '#0C052B',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },

  logo: {
    width: 238,
    height: 50,
  },

  fundo: {
    width:'100%',
    height:'100%',
  },

  myName: {
    color: '#0C052B',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 20,
  },

  inputs: {
    backgroundColor: '#BDBDBD00',
    borderWidth: 1,
    borderRadius: 3 ,
    height: 75,
    width: 300,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 15,
  },

  botao:{
    backgroundColor: '#000080',
    width: 200,
    height: 40,
    borderRadius: 20,
    textAlign: 'center',
    shadowColor: '#000080',
    shadowOffset: { 
      width: 0, 
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 50,
  },

  textb:{
    textAlign:'center', 
    marginTop: -22,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    position: 'relative'
  },

  star:{
    width: 25,
    height: 25,
    marginTop: 7,
    marginLeft: 10,
  },

  starr:{
    width: 25,
    height: 25,
    marginTop: 7,
    marginLeft: 165,
    position:'absolute'
  }
});

export default styles;