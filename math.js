function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function checkPassword(email, password){
    if (email === 'shawn@psych.com' && password === 'tearsforfears'){
        return "welcome shawn"
    } else {
        return "unauthorized"
    }
}

module.exports = {
    add, subtract, checkPassword
}