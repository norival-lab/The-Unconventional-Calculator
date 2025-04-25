const defaultValue = 0;
let currentValue = defaultValue;
let logEntries = [];

function usrNumber() {
    return parseInt(userInput.value);
}

function outPutLog(operator, resultBeforeCalc, calcNumber) {
    const calcLog = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentValue, calcLog);
}

function writeLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
    };
    console.log(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = usrNumber();
    const initialResult = currentValue;
    currentValue += enteredNumber;
    outPutLog('+', initialResult, enteredNumber);
    writeLog('add', initialResult, enteredNumber, currentValue);
}

function subtract() {
    const enteredNumber = usrNumber();
    const initialResult = currentValue;
    currentValue -= enteredNumber;
    outPutLog('-', initialResult, enteredNumber);
    writeLog('subtract', initialResult, enteredNumber, currentValue);
}

function multiply() {
    const enteredNumber = usrNumber();
    const initialResult = currentValue;
    currentValue *= enteredNumber;
    outPutLog('*', initialResult, enteredNumber);
    writeLog('multiply', initialResult, enteredNumber, currentValue);
}

function divide() {
    const enteredNumber = usrNumber();
    const initialResult = currentValue;
    currentValue /= enteredNumber;
    outPutLog('/', initialResult, enteredNumber);
    writeLog('divide', initialResult, enteredNumber, currentValue);
}

function erase() {
    const enteredNumber = '';
    const initialResult = '';
    userInput.value = '';
    currentValue = '0';
    outPutLog('', initialResult, enteredNumber);
    writeLog('clean', initialResult, enteredNumber, currentValue);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
eraseBtn.addEventListener('click', erase);
