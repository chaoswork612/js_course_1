function verifyPassword(password) {
    if (
            verifyLength(password) && 
            verifyStartsWtihXAndOrEndsWithZ(password) && (
                verifySpecailCharacters(password, "&") ||
                verifySpecailCharacters(password, "$") ||
                verifySpecailCharacters(password, "%") ||
                verifySpecailCharacters(password, "*")
            )
    ) {
        return "Password is correct";
    } else {
        return "Password is incorrect";
    }
}

function verifyLength(password) {
    if (password.length > 3 && password.length < 12) {
        return true;
    } else {
        return false;
    }
}

function verifySpecailCharacters(password, char) {
    if (!!~password.indexOf(char)) {
        return true;
    } else {
        return false;
    }  
}

function verifyStartsWtihXAndOrEndsWithZ(password) {
    if (password.indexOf("q") == 0 && password.lastIndexOf("z") == password.length-1) {
        return true;
    } else if (password.indexOf("q") == 0 || password.lastIndexOf("z") == password.length-1) {
        return true;
    } else {
        return false;
    }
}