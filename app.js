let integer, realN, birth, password, passwordConfirm;

intNbtn.onclick = function() {
    integer = document.getElementById('intN').value;
    console.log(integer);
    return false;
};

realBtn.onclick = function() {
    realN = document.getElementById('realN').value;
    console.log(realN);
    return false;
};

birthBtn.onclick = function() {
    birth = document.getElementById('birth').value;
    console.log(birth);
    return false;
};

pswdForm1.onmouseleave = function() {
    document.getElementById("passwordBtn").disabled = false; 
    return false;
}

passwordBtn.onclick = function() {
    password = document.getElementById('password').value;
    passwordConfirm = document.getElementById('passwordConfirm').value;
    if (password != passwordConfirm) {
        document.getElementById("passwordBtn").disabled = true; 
    }else {
        document.getElementById("passwordBtn").disabled = false; 
        console.log(passwordConfirm);
    }
    return false;
}