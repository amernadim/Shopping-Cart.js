function getTextElementValueById(elementId){
  const totalElemnt = document.getElementById(elementId);
  const currentTotalString = totalElemnt.innerText;
  const currentTotal = parseInt(currentTotalString );
  return currentTotal;
}
function setTextElementValueById(elementId,value){
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}

function calculateSubTotal(){
  const currentCaseTotal = getTextElementValueById('case-price');
  const currentPhoneTotal = getTextElementValueById('phone-price');

  const currentSubTotal = currentCaseTotal + currentPhoneTotal;
  setTextElementValueById('subtotal', currentSubTotal);

  const taxValueString = (currentSubTotal * 0.1).toFixed(2);
  const taxValue = parseFloat(taxValueString);
  setTextElementValueById('tax', taxValue);

  const totalValue = currentSubTotal + taxValue;
  setTextElementValueById('total',totalValue);

}
