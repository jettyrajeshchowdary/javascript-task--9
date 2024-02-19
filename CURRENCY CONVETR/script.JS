document.getElementById('convertBtn').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then(response => response.json())
      .then(data => {
        const exchangeRate = data.rates[toCurrency];
        const result = (amount * exchangeRate).toFixed(2);
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'An error occurred. Please try again.';
      });
  });
  
  