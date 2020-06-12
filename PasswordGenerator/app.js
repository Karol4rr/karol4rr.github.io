// Listen for submit

document.getElementById('generate-password').addEventListener('click', calculateResults);

// Calculate Results
function calculateResults(e) {

    let characters = 'abcdefghijklmnopqrstuwxyz';

    const uppercase = document.querySelector('#uppercase');
    const numbers = document.querySelector('#numbers');
    const special = document.querySelector('#special');
    const charNumber = document.querySelector('#char-number').value;
    let newPassword = '';
    let passwordPlaceholder = document.querySelector('#password-placeholder');

    if (uppercase.checked == true){
        characters += "ABCDEFGHIJKLMNOPQRSTUWXYZ";
    }

    if (numbers.checked == true){
        characters += "0123456789";
    }

    if (special.checked == true){
        characters += "!@#$%^&*()";
    }

    for (let i = 0; i < charNumber; i++) {
        newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordPlaceholder.value = newPassword;
    document.getElementById('results').style.display = "block";

}