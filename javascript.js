const pass = document.querySelector('#password');
const vpass = document.querySelector("#vpassword");
const btn = document.querySelector('button')

function check(e) {
    let passValue  = pass.value;
    let vpassValue  = vpass.value;
    if(passValue!=vpassValue) {
        alert("Password values don't match")
    }
}

btn.addEventListener('click', check)