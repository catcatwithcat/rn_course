/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const MyTextComponent = props => {
  console.log(props);
  let text = props.text;
  return (
    <Text style={{
      color: 'pink',
    }}>
      {text}
    </Text>
  );
}
const BoldText = props => {
  let text = props.text;
  return (
    <Text style={
      {
        fontWeight: 'bold',
      }}>
      {text}
    </Text>
  );
}
const BoldOrRedText = props => {
  let isBold = props.isBold;

  let text = props.text;
  return (
    <Text style={{
      color: isBold ? 'black' : 'red',
      fontWeight: isBold ? 'bold' : 'normal',
    }}
    >
      {text}
    </Text>
  );
}
class MyButton extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      textColor: 'green',

    }
  }

  onPress_ChangeColorButton=()=>{
    console.log('Butona Basıldı');
    // alert('Bastııın'); Telefon ekranına alert basar
    // state i değiştiricez
    this.setState({
      textColor:'black',
    })
  } 

  render() {
    console.log('rendering', this.props);
    return (
      // <Text style={{color: this.state.textColor}} >asdf</Text>
      <TouchableOpacity onPress={this.onPress_ChangeColorButton}>
        <Text style={{ color: this.state.textColor }} >Buton</Text>
      </TouchableOpacity>
    )
  }
}

const App = () => {

  return (
    <>
      <MyTextComponent text={"birinci componenti  yazdım"} ></MyTextComponent>
      <MyTextComponent text={"ikinci componenti  yazdım"} ></MyTextComponent>
      <BoldText text={"Başlık"} ></BoldText>
      <BoldOrRedText text={"Kalın"} isBold={true} ></BoldOrRedText>
      <BoldOrRedText text={"Kırmızı"} isBold={false} ></BoldOrRedText>
      <MyButton text={"Buton"} ></MyButton>
    </>
  );

}


export default App;
