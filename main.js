const calculatorContainer = document.getElementById('calc-container');
const displayArea = document.getElementById('display-area');

calculatorContainer.addEventListener('click' , (e) => {
      if(e.target.nodeName === 'BUTTON') {
         switch (e.target.textContent) {
            case 'C': 
              clear();
              break;
            case 'DEL': 
              deleteOneValue();
              break;
            case '=': 
              evaluate();
              break;
            default: 
              addToDisplay(e.target.textContent);
              break;
         }
      }
})

function clear() {
    displayArea.textContent="";
}

function addToDisplay(value) {
    displayArea.textContent +=value;
}

function deleteOneValue() {
    let currentContent = displayArea.textContent;
    displayArea.textContent = currentContent.substring(0, currentContent.length - 1);
}

function evaluate() {
    try {
        let calculation = math.evaluate(displayArea.textContent);
        displayArea.textContent = calculation;
    } catch (error) {
        displayArea.textContent = "Invalid Operation";
        console.error(error);
    }
}