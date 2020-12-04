function addOutput(num) {
  var showValue = document.getElementById("showValue");
  showValue.value = showValue.value+num;
}

function calculate() {
  var showValue = document.getElementById("showValue");
  var result = eval(showValue.value);
  var valueResult = document.getElementById("result");
  valueResult.value = result;
}

function reset() {
  var showValue = document.getElementById("showValue");
  showValue.value = "";
  var valueResult = document.getElementById("result");
  valueResult.value = "";
}