
document.getElementById('deposit-btn').addEventListener('click', function(){

  const depositAmmount = document.getElementById('ammount-deposit');
  const newDepositAmmount = depositAmmount.value;

  

  const displayDeposit = document.getElementById('displayDeposit-ammount')
  const previousTotal = displayDeposit.innerText;

  const currentDeposit = parseFloat(newDepositAmmount) + parseFloat(previousTotal);

  const fixed2 = currentDeposit.toFixed(0);

  displayDeposit.innerText = fixed2;



  ////////////////////////// Total Balance ////////////////////////////

  const totalDisplayBalance = document.getElementById('total-balance');
  const totalBalanceString = totalDisplayBalance.innerText;
  const totalBalance = parseFloat(totalBalanceString);


  // Calculate //

  const currentTotalBanance = totalBalance + parseFloat(newDepositAmmount);

  const fixed3 = currentTotalBanance.toFixed(0);
  
  totalDisplayBalance.innerText = fixed3;

 






  depositAmmount.value = "";
})