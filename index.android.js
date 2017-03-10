var React = require('react');
var View = require('react-native').View;
var Text = require('react-native').Text;
var Button = require('react-native').Button;
var AppRegistry = require('react-native').AppRegistry;

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
          Meu ola mundo!!! 4
        </Text>
        <Button 
          title="Gerar número aleatório"
          onPress={geraNumeroAleatorio}
        />
      </View>
    );

};

AppRegistry.registerComponent('rctNtvAppNumAleatorio', () => App);