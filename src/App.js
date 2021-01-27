import React from "react";
import './App.css';
//import steps from './steps';
import Box from './component/box'
import './styles/global.css'

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 140;
const stepsMin = 0;
const stepsMax = 50000;


export class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          water : 0,
          heart : 120,
          temperature : -10,
          steps : 3000
      }

  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
        <Box icons={'local_drink'} color = {'#3A85FF'} value = {1.5} unit = {"L"}/>
        <Box icons={'directions_walk'} color = {"black"} value = {3000} unit = {"steps"} type = {"range"}/>
        <Box icons={'favorite'} color = {"red"} value = {120} unit = {"bpm"}/>
        <Box icons={'wb_sunny'} color = {"yellow"} value = {-10} unit = {"°C"}/>
        </div>
        <div>
          <h1 className="text-primary">Heart : {heartMin}</h1>
          <h1 className="text-primary">Temperature : {tempMin}</h1>
          <h1 className="text-primary">Steps : {stepsMin}</h1>
        </div>
      </div>
    );
  }
}

export default App