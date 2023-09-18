
document.getElementById('deposit-btn').addEventListener('click', function(){

  const depositAmmount = document.getElementById('ammount-deposit');
  const depositOfAmmount = depositAmmount.value;

  

  const displayDeposit = document.getElementById('displayDeposit-ammount')
  const displayDepositMoney = displayDeposit.innerText;
  displayDeposit.innerText = depositOfAmmount;

})