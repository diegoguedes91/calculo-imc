import { Modal } from './modal.js'
import { AlertError } from './alertError.js'
import { calculateIMC, notANumber} from './utils.js'


const form = document.querySelector('form');
const inputWeight = document.querySelector('#weigth'); 
const inputHeight = document.querySelector('#height'); 


inputHeight.oninput = () => AlertError.close(); 
inputWeight.oninput = () => AlertError.close();
form.onsubmit = event => {
    event.preventDefault(); 

    const weight = inputWeight.value;
    const height = inputHeight.value; 

    
    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);
    if(weightOrHeightIsNotANumber){
        AlertError.open(); 
        return; 
    }
    AlertError.close(); 

    
    const result = calculateIMC(weight, height);
    displayResultMassage(result)
}

function displayResultMassage(result){
    const message = `Seu IMC é de ${result}`; 

    Modal.message.innerText = message; 
    Modal.open() 
}
