function verifyPassword(password) {
    switch(
        verifyLength(password) && 
        verifyStartsWtihXAndOrEndsWithZ(password) && (
            verifySpecailCharacters(password, "&") ||
            verifySpecailCharacters(password, "$") ||
            verifySpecailCharacters(password, "%") ||
            verifySpecailCharacters(password, "*")
        )
    ) {
        case true:
            return "Password is correct";
        case false:
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
    if (!!~password.indexOf(char)){
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