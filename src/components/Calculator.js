import React, { Component } from 'react';

import './Calculator.css';
import CalcButton from './CalcButton';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (

      <div className="Calculator">
        <div className="Calculator-result">0</div>

        <CalcButton character="AC" />
        <CalcButton character="+/-" />
        <CalcButton character="%" />
        <CalcButton character="÷" classButton="orangeButton" />

        <CalcButton character="7" />
        <CalcButton character="8" />
        <CalcButton character="9" />
        <CalcButton character="x" classButton="orangeButton" />

        <CalcButton character="4" />
        <CalcButton character="5" />
        <CalcButton character="6" />
        <CalcButton character="-" classButton="orangeButton" />

        <CalcButton character="1" />
        <CalcButton character="2" />
        <CalcButton character="3" />
        <CalcButton character="+" classButton="orangeButton" />

        <CalcButton character="0" />
        <CalcButton character="." />
        <CalcButton character="=" classButton="orangeButton" />

      </div>
    );
  }
}

export default Calculator;
