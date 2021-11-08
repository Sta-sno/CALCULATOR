class Calculator {
constructor(previousOperandTextElement, currentOperandTextElement){
 this.previousOperandTextElement = previousOperandTextElement
 this.currentOperandTextElement = currentOperandTextElement
   } 
   clear(){

   }
   delete(){

   }
   appendNumber(number){

   }
   chooseOperation(operation){

   }
   compute(){
       
   }
 }

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelectorAll('[data-equals]')
const deleteButtons = document.querySelectorAll('[data-delete]')
const allClearButtons = document.querySelectorAll('[data-allClear]')
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]')