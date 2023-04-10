document.getElementById('convertButton').addEventListener('click', function() {
  var dollarsInput = document.getElementById('dollarsInput');
  var result = document.getElementById('result');


  if (dollarsInput.value === '' || isNaN(dollarsInput.value)) {
    result.textContent = 'Please enter a valid amount';
    return;
  }


  var dollars = parseFloat(dollarsInput.value);
  var rupees = dollars * 81.90; 

 
  result.textContent = dollars + ' Dollars is equivalent to ' + rupees.toFixed(2) + ' Rupees';
});
