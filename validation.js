const form = document.getElementById('form');
const username = document.getElementById('username');
const email =document.getElementById('email');
const password =document.getElementById('password');
const password2 =document.getElementById('password');

// eventhappening
form.addEventListener('submit',e =>{
    e.preventDefault();
    checkInPuts();
});
function checkInPuts(){
    //trim to remove white spaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim()
 //username
    if(usernameValue === ''){
        setErrorFor(username,'username cant be blank');
    }else{
        setSuccessFor(username);
    }
// password
    if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
    //pasword2
    if(password2Value === ''){
        setErrorFor(password2,'password cant be blank');
    }else if(passwordValue !== password2Value){
        setErrorFor(password2,'wrong password');
    }else{
        setSuccessFor(password2);
    }
}
//the sucess fuction to for all input values
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'formControl error';
    // i wrote massage instead message
    small.innerText = message;
}
//the sucess fuction to for all input values
 function setSuccessFor(input){
     const formControl = input.parentElement;
     formControl.className = 'formControl success';
 }