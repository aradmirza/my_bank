
document.getElementById('withdraw-btn').addEventListener('click', function(){

  const withdrawField = document.getElementById('withdraw-ammount');
  const withdrawFieldString = withdrawField.value;
  const newWithdrawAmmount = parseFloat(withdrawFieldString);
  

  const withdrawDisplay = document.getElementById('display-withdraw');
  const withdrawDisplayString = withdrawDisplay.innerText;
  const currentWithdrawDisplay = parseFloat(withdrawDisplayString);
  

  const totalWithdrawBalance = newWithdrawAmmount + currentWithdrawDisplay;
  withdrawDisplay.innerText = totalWithdrawBalance;



  // Total Balance Area //

  const totalBalanceArea = document.getElementById('total-balance');
  const totalBalanceAreaString = totalBalanceArea.innerText;
  const totalBalanceAmmount = parseFloat(totalBalanceAreaString);
  

  const totalBalanceAddition = totalBalanceAmmount - newWithdrawAmmount;
  totalBalanceArea.innerText = totalBalanceAddition;








  withdrawField.value ="";


})