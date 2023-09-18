
document.getElementById('deposit-btn').addEventListener('click', function(){

  const depositAmmount = document.getElementById('ammount-deposit');
  const newDepositAmmount = depositAmmount.value;

  

  const displayDeposit = document.getElementById('displayDeposit-ammount')
  const previousTotal = displayDeposit.innerText;

  const currentDeposit = parseFloat(newDepositAmmount) + parseFloat(previousTotal);

  const fixed2 = currentDeposit.toFixed(2);

  displayDeposit.innerText = fixed2;






  depositAmmount.value = "";
})