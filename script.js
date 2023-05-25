function addToResult(value) {
    document.getElementById("result").value += value;
  }
  
  function calculateResult() {
    var result = eval(document.getElementById("result").value);
    var expression = document.getElementById("result").value;
    document.getElementById("result").value = result;
    addToHistory(expression + " = " + result);
  }
  
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function addToHistory(expression) {
    var historyDiv = document.getElementById("history");
    var newHistoryItem = document.createElement("div");
    newHistoryItem.textContent = expression;
    historyDiv.appendChild(newHistoryItem);
  }
  
  function clearHistory() {
    var historyDiv = document.getElementById("history");
    historyDiv.innerHTML = "";
  }