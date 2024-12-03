document.getElementById('numberForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const numberInput = document.getElementById('numberInput');
    const value = parseInt(numberInput.value, 10);
  
    if (isNaN(value) || value <= 10) {
      alert('Please enter a number bigger than 10.');
    } else {
      alert('Form submitted successfully!');
    }
  });