var React = require('react');
var Text = require('react-native').Text;
var AppRegistry = require('react-native').AppRegistry;

const App = function(){

  return (
      <Text>
        Meu ola mundo!!!
      </Text>
    );

};

AppRegistry.registerComponent('rctNtvAppNumAleatorio', function(){ return App});