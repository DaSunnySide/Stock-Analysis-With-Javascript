import React from 'react';

function RadioBox() {
  return (
    <div id="graphType">
      <label><input type="radio" name="functionType" value="TIME_SERIES_DAILY" />Time Series Daily</label>
      <label><input type="radio" name="functionType" value="TIME_SERIES_INTRADAY" />Time Series Intraday</label>
      <label><input type="radio" name="functionType" value="TIME_SERIES_WEEKLY" />Time Series Weekly</label>
      <label><input type="radio" name="functionType" value="TIME_SERIES_MONTHLY" />Time Series Monthly</label>
    </div>
  )
}

function GetRadioVal() {
  var val;
  var radios = document.getElementsByName('functionType');
  for(var i=0, len=radios.length; i<len; i++) {
    if(radios[i].checked) {
      val = radios[i].value;
      break;
    }
  }
  return val;
}

export { RadioBox, GetRadioVal };
