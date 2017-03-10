import React from 'react';
import { View,Text,Button, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();
  numero_aleatorio = numero_aleatorio * 10;
  numero_aleatorio = Math.floor(numero_aleatorio);

  alert(numero_aleatorio);
};

const App = () => {

  return (
      <View>
        <Text>
          Gerando números aleatórios de 1 a 9
        </Text>
        <Button 
          title="Gerar número aleatório"
          onPress={geraNumeroAleatorio}
        />
      </View>
    );

};

AppRegistry.registerComponent('rctNtvAppNumAleatorio', () => App);