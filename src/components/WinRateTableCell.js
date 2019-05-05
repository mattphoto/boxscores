import React, { Component } from 'react';
import { blueGrade, redGrade, upperClip, lowerClip } from '../components/constants';

import {
  getBoxBGColor,
  calculateDelta,
} from '../utilityFunctions';

import {
  WinRateDeltaCell,
} from '../components/styles';

export class WinRateTableCell extends Component {

  render() {

  const {
    datum,
    reference,
    scaleFactor = 1,
    scaleFactorLow,
    content,
    hovered,
    width
  } = this.props;

  const scaleFactor2 = scaleFactor || 1;
  const bgColorCalc = getBoxBGColor(datum, reference, scaleFactor);

  return (
    <WinRateDeltaCell 
      bgColor={bgColorCalc}
      fontWeight={calculateDelta(datum, reference, scaleFactor)}
      hovered={hovered}
      scaleFactor={scaleFactor}
      scaleFactorLow={scaleFactor2}
      width={width || '100px'}
    >
      {content}
    </WinRateDeltaCell>
  )
  }
}