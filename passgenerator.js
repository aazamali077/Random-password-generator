const passwordBox = document.getElementById("password");
const length = 8;

const upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCase = "qwertyuioplkjhgfdsazxcvbnm";
const number = "1234567890";
const symbol = "!@#$%^&*()_+-={}|[]\;:<>?/~";
const allChars = upperCase+lowerCase+number+symbol;


function CreatePassword(){
    let password = "";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    // password+=number[Math.floor(Math.random()*number.length)];
    // password+=symbol[Math.floor(Math.random()*symbol.length)];

    while(length>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword(){
    navigator.clipboard.writeText(passwordBox.value).then(function() {
        console.log('Password copied to clipboard');
        const notification = document.getElementById('copyNotification');
        notification.style.visibility = 'visible';
        notification.classList.remove('hidden');

        setTimeout(function() {
          notification.classList.add('hidden');
        }, 2000);
      });
    }