function updateCaseNumber(isIncrease){
  const inputQuantity = document.getElementById('phone-input');
  const inputQuantityString = inputQuantity.value;
  const inputQuantityNumber = parseInt(inputQuantityString);  
  let newInpuitQuantity;

  if(isIncrease === true){
    newInpuitQuantity = inputQuantityNumber + 1;
  } else {
    newInpuitQuantity = inputQuantityNumber - 1;
  }
  
  inputQuantity.value = newInpuitQuantity;
  return newInpuitQuantity;
}

function updateCaseTotalPrice(newInpuitQuantity){
  const phoneTotalPrice = newInpuitQuantity * 1219;
  const phoneTotalElement = document.getElementById('phone-price');
  phoneTotalElement.innerText = phoneTotalPrice;
}

document.getElementById('phone-btn-plus').addEventListener('click',function(){
 const newInpuitQuantity = updateCaseNumber(true);

 updateCaseTotalPrice(newInpuitQuantity);

 calculateSubTotal()
})

document.getElementById('phone-btn-minus').addEventListener('click',function(){
  const newInpuitQuantity = updateCaseNumber(false);

  updateCaseTotalPrice(newInpuitQuantity);

  calculateSubTotal()
  
})

/* const subtotal = document.getElementById('subtotal');
const subtotalString = subtotal.innerText;
const subtotalNumber = parseInt(subtotalString);

const phonePrice =  document.getElementById('phone-price');
const phonePriceString = subtotal.innerText;
const phonePriceNumber = parseInt(subtotalString);

const casePrice =  document.getElementById('case-price');
const casePriceString = subtotal.innerText;
const casePriceNumber = parseInt(subtotalString);

const subtotalPrice = phonePriceNumber + casePriceNumber;
subtotal.innerText =  subtotalPrice; */

