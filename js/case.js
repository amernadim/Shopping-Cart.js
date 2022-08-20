function updatePhoneNumber(isIncrease){
  const inputQuantity = document.getElementById('case-input');
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

function updatePhoneTotalPrice(newInpuitQuantity){
  const phoneTotalPrice = newInpuitQuantity * 59;
  const phoneTotalElement = document.getElementById('case-price');
  phoneTotalElement.innerText = phoneTotalPrice;
}


document.getElementById('case-btn-plus').addEventListener('click',function(){
 const newInpuitQuantity = updatePhoneNumber(true);

 updatePhoneTotalPrice(newInpuitQuantity);

 calculateSubTotal()
 
})

document.getElementById('case-btn-minus').addEventListener('click',function(){
  const newInpuitQuantity = updatePhoneNumber(false);

  updatePhoneTotalPrice(newInpuitQuantity);

  calculateSubTotal()
  
})