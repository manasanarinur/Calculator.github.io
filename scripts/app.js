 const defaultResult = 0;
 let currentResult = defaultResult;
 let logEntries = [];


 // gets input from input field 
 function getuserInput() {
      return parseInt(userInput.value);

 }
 // this is output descripiction
 function createAndwriteOutput(operator, resultBeforeCalc, calcNumber) {
      const calcDescription = `${resultBeforeCalc}${operator}${calcNumber}`;
      outputResult(currentResult, calcDescription);
 }
 //  function for with using objects
 function writeToLog(operationInditifier, prevResult, operationNumber, newResult) {
      const logEntry = {
           operation: operationInditifier,
           prevResult: prevResult,
           number: operationNumber,
           result: newResult
      };
      logEntries.push(logentry);
      console.log(logEntries);
 }

 function calculateResult(calculationType) {
      const enteredNumber = getuserInput();
      const initialResult = currentResult;
      let mathOperator;
      if (calculationType === 'ADD') {
           currentResult += enteredNumber;
           mathOperator='+';
      } else if(calculationType==='SUBTRACT'){
           currentResult -= enteredNumber;
           mathOperator='-';
      }else if(calculationType==='MULTIPLY'){
          currentResult *= enteredNumber;
           mathOperator='*'; 
      }else{
          currentResult /= enteredNumber;
          mathOperator='/.';   
      }

      createAndwriteOutput( mathOperator,initialResult, enteredNumber);
      writeToLog(calculationType,initialResult,enteredNumber, currentResult);
 }

 // this is for addition 
 function add() {
     calculateResult('ADD');
 }
 // this is for subtract
 function subtract() {
      calculateResult('SUBTRACT');
 }
 // this is for multiply
 function multiply() {
     calculateResult('MULTIPLY');

 }

 // this is for divide
 function divide() {
      calculateResult('DIVIDE')
 }

 // this is function call
 addbtn.addEventListener('click', add);
 subtractbtn.addEventListener('click', subtract);
 multiplybtn.addEventListener('click', multiply);
 dividebtn.addEventListener('click', divide);