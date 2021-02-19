function getPin() {
    const randomNumber = Math.random() * 10000;
    const pin = (randomNumber + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        return getPin();
    }

}
// display generated pin
function generatePin() {
    const pinInput = document.getElementById('pinInput').value = getPin();
    const resetPin = document.getElementById('typed-pin').value = '';
}

// handle calculator
document.getElementById('buttonContainer').addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit === 'C') {
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = '';
        }
        if(digit === '<'){
            let typedInput = document.getElementById('typed-pin').value;
            typedInput = typedInput.substr(0,typedInput.length - 1);
            const currentInput = document.getElementById('typed-pin').value = typedInput;
        }
    } else {
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})

function matchPin() {
   try {
    const inputPin = document.getElementById('pinInput').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (typedPin === '') {
        throw "Please first create Generate Pin"
       }
    if (inputPin === typedPin) {
        displayMatchResult('block', 'none')
    } else {
        displayMatchResult('none', 'block')
        tryPin()
    }
   } catch (error) {
       alert(error)
   }
}

function displayMatchResult(correctPin, incorrectPin) {
    const notify = document.getElementById('correct');
    notify.style.display = correctPin;
    const verify = document.getElementById('incorrect');
    verify.style.display = incorrectPin;
}

const tryPin = () => {
    const pinTry = document.getElementById('pin-try');
    let count = document.getElementById('count');
    let countDecrease = parseInt(count.innerText);        countDecrease--;
    count.innerText = countDecrease;
    pinTry.style.display = 'block';
    if (countDecrease === 0) {
        alert('please try again later.')
        location.reload();
    }
}