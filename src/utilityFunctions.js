import { blueGrade, redGrade, upperClip, lowerClip } from './components/constants';

export const calculateDelta = ( datum, reference, scaleFactor ) => {
  const delta = Math.abs(datum - reference) * scaleFactor
  return !!delta ? delta : 0;
}

export const getBoxBGColor = ( datum, reference, scaleFactor ) => {
  let upperColorLookUp = (datum - reference) * scaleFactor;
  let lowerColorLookUp = (reference - datum) * scaleFactor;
  lowerColorLookUp = lowerColorLookUp > lowerClip ?  lowerClip : lowerColorLookUp;
  upperColorLookUp = upperColorLookUp > upperClip ?  upperClip : upperColorLookUp;
  if ( datum > reference ) {
    return blueGrade[Math.ceil(upperColorLookUp)];
  } else {
    return redGrade[Math.floor(Math.abs(lowerColorLookUp))];
  }
}


export const calcGBBackgroundColor = ( gamesBack, midGB, lastGB ) => {
  const lowerRange = midGB - lastGB;
  const upperColorLookUp = 
    midGB - gamesBack === 0 ? 0 : Math.round( ( midGB - gamesBack ) * 22 / midGB + 3  ) - 1
  const lowerColorLookUp = 
    midGB - gamesBack === 0 ? 0 : Math.round( ( midGB - gamesBack ) * 22 / lowerRange + 3 ) - 1
  if ( gamesBack < midGB ) {
    return blueGrade[upperColorLookUp];
  } else {
    return redGrade[Math.abs(lowerColorLookUp)];
  }
}

export const padZero = ( numberToPad ) => {
  let paddedNumber;
  if (numberToPad % 1 !== 0) {
    paddedNumber = numberToPad;
  } else {
    paddedNumber = numberToPad === 0 ? 0 : numberToPad + '.0';
  }
  return paddedNumber
}

export const convertMinutes = minutesString => {
  if (!minutesString ) {return ''}
  const [ hours, minutes ] = minutesString.split(':');
  const time = parseInt(hours) + parseInt(minutes)/60
  if (time > 0 && time < 1) {return 1}
  return time;
}