var signupName = document.querySelector('#sign #userName') ;
var signupEmail = document.querySelector('#sign #userEmailSign') ; 
var signupPassword = document.querySelector('#sign #userPasswordSign') ;
var signinEmail = document.querySelector('#login #userEmail');
var signinPassword = document.querySelector('#login #userPassword');
var signinBtn = document.querySelector('#login #loginBtn');
var signupBtn = document.querySelector('#sign #signUp');
var homeUserName = document.querySelector('#homeUserName')

var usersList = [];


// signUp storage
if (localStorage.getItem('users') == null) {
    usersList = []
} else {
    usersList = JSON.parse(localStorage.getItem('users'))
}



// // for check email is exist
function isEmailExist() {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return true
        } else {
            return false
        }
    }
}


function isEmpty(){
    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return true
    } else {
        return false
    }
}


function signUp(){

    // create user
    var user = {
        name: signupName.value ,
        email: signupEmail.value,
        password: signupPassword.value
    }

    // set list at local storage
    if (isEmpty() == true) {
        document.querySelector('#check').innerHTML = '<span class="text-danger">all inputs are required</span>'
    } else {
        if (isEmailExist() == true) {
            document.querySelector('#check').innerHTML = '<span class="text-danger">Email is already exist</span>'
        } else {
            usersList.push(user);
            localStorage.setItem('users' , JSON.stringify(usersList));
            document.querySelector('#check').innerHTML = '<span class="text-success">Sign up success</span>'
            window.location.href = 'index.html';
        // success massege 
        
        clearInputs();
    }

    
}}



function clearInputs() {
    signupName.value = "";
    signupEmail.value = "";
    signupPassword.value = "";
}


// // ============= for login================
//for check inputs is empty or not
function isLoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return true
    } else {
        return false
    }
}


function login() {
    if (isLoginEmpty() == true) {
        document.querySelector('#incorrect').innerHTML = '<span class="text-danger">All inputs is required</span>'

    } else {
        var password = signinPassword.value ;
        var email = signinEmail.value ;
        for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].email.toLowerCase() == email.toLowerCase() && usersList[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('sessionUsername', usersList[i].name)
            document.querySelector('#incorrect').innerHTML = '<span class="text-success">log in successfully</span>'
            window.location.href = 'home.html';
        } else {
            document.querySelector('#incorrect').innerHTML = '<span class="text-danger">email or password is invalid</span>'
        }
    }
    }
    
}

var userName = localStorage.getItem('sessionUsername');
homeUserName.innerHTML = 'welcome '+ userName ;













