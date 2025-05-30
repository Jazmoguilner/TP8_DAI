import React from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView
} from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <ImageBackground
        source={require('./assets/Foto.png')}
        style={styles.background}
        resizeMode="cover"
      >
       
      </ImageBackground>

      <View style={styles.form}>
        <Text style={styles.subTitle}>Inicia sesión</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          placeholderTextColor="#999"
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#999"
          secureTextEntry
        />
        <Text style={styles.textNote}>Mínimo 10 caracteres</Text>

        <TouchableOpacity style={styles.boton}>
          <Text style={styles.botonTexto}>Iniciar</Text> 
        </TouchableOpacity>

        <Text style={styles.registerText}>
          ¿No tienes cuenta? <Text style={styles.link}>Registrate</Text>
        </Text>

      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center', //centrar la card
   
  },
  background: {
    width: '100%', //para que ocupe el 100% del ancho
    height: 250,
    justifyContent: 'center',
   
  },
  
  form: {
    width: '87%',
    backgroundColor: '#fff',
    marginTop: 25,
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#212274',
  },
  input: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  textNote: {
    fontSize: 12,
    color: '#212274',
    marginBottom: 15,
  },
  boton: {
    backgroundColor: '#13145B',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10, //cuanto espacio hay entre iniciar y la pregunta
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#212274',
  },
 

});
