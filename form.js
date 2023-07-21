function register() {

    var uname = document.getElementById('name').value.trim();
    var mobile = document.getElementById('mobile').value.trim();
    var email = document.getElementById('email').value.trim();
    var address = document.getElementById('address').value.trim();

    var namePattern = /^[A-Za-z\s]+$/;
    var mobilePattern = /^\d{10}$/;
    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var valid = true;

    document.getElementById('nameError').textContent = '';
    document.getElementById('mobileError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('addressError').textContent = '';


    if (uname == "") {
        document.getElementById('nameError').textContent = "Name cannot be empty";
        valid = false;
    }
    else if (!(namePattern.test(uname))) {
        document.getElementById('nameError').textContent = "Please type a valid name";
        valid = false;
    }

    if (mobile == "") {
        document.getElementById('mobileError').textContent = "Field cannot be empty!"
        valid = false;
    }
    else if (!(mobilePattern.test(mobile))) {
        document.getElementById('mobileError').textContent = "Please enter a valid mobile number";
        valid = false;
    }

    if (email == '') {
        document.getElementById('emailError').textContent = "Email cannot be empty!";
        valid = false;
    }
    else if (!(emailPattern.test(email))) {
        document.getElementById('emailError').textContent = "Please enter a valid Email!";
        valid = false;
    }

    if (address.length == 0) {
        document.getElementById('addressError').textContent = "Please enter a valid address!";
        valid = false;
    }
    return valid;

}

