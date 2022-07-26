// calculator logic here 

var result: number = 0; // contains the evaluated result
var resultString = "";  // contains the appended string of all input that user has selected in that session


function calculatorlogic(event: any) {
    const target = event.target as HTMLButtonElement;
    if (target.innerText === "AC") {
        resultString = "";
        let myContainer = document.getElementById('result') as HTMLInputElement;
        myContainer.value = resultString;
    } else if (target.innerText === "=") {
        resultString = resultString.replace('÷', '/').replace('×', '*');
        result = eval(resultString);
        let myContainer = document.getElementById('result') as HTMLInputElement;
        myContainer.value = result.toString();

    } else {

        resultString = resultString + target.innerText;
        let myContainer = document.getElementById('result') as HTMLInputElement;
        myContainer.value = resultString;

    }

}
