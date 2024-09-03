const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDivision = document.getElementById('result');

/**
 * Check wheter the input text is a palindrome or not.
 * @param {string} input - Text to be checked.
 * @returns
 */
const checkPalindrome = input => {
  resultDivision.innerHTML = ''; // Remove the previous result.


  if (!input) {
    alert('Please, input a value.');
    return;
  }

  const regex = /[^A-Za-z0-9]/gi;
  output = input.replace(regex, '').toLowerCase();
  resultDivision.innerHTML = `<strong>${input}</strong> ${output === [...output].reverse().join('') ? 'is' : 'is not'} a palindrome`;
};

checkButton.addEventListener('click', () => { 
  checkPalindrome(textInput.value);
  textInput.value = '';
}, false);

textInput.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    checkPalindrome(textInput.value);
    textInput.value = '';
  }
}, false);
