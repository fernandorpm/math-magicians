import React, { Component } from 'react';

import './Calculator.css';
import CalcButton from './CalcButton';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (

      <div className="Calculator">
        <div className="Calculator-result">0</div>

        <CalcButton buttonName="AC" />
        <CalcButton buttonName="+/-" />
        <CalcButton buttonName="%" />
        <CalcButton buttonName="÷" classButton="orangeButton" />

        <CalcButton buttonName="7" />
        <CalcButton buttonName="8" />
        <CalcButton buttonName="9" />
        <CalcButton buttonName="x" classButton="orangeButton" />

        <CalcButton buttonName="4" />
        <CalcButton buttonName="5" />
        <CalcButton buttonName="6" />
        <CalcButton buttonName="-" classButton="orangeButton" />

        <CalcButton buttonName="1" />
        <CalcButton buttonName="2" />
        <CalcButton buttonName="3" />
        <CalcButton buttonName="+" classButton="orangeButton" />

        <CalcButton buttonName="0" />
        <CalcButton buttonName="." />
        <CalcButton buttonName="=" classButton="orangeButton" />

      </div>
    );
  }
}

export default Calculator;
