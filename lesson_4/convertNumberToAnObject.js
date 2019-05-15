let object = {
    'ones': 0,
    'tenners': 0,
    'hundreds': 0
};
function convertNumberToAnObject(number){
    let object = {
        'ones': 0,
        'tenners': 0,
        'hundreds': 0
    };

    if(number >= 999) {
        console.log("The number is greater than 999");
    } else if(number.toString().length === 3) {
        object.hundreds = number.toString().charAt(0);
        object.tenners = number.toString().charAt(1);
        object.ones = number.toString().charAt(2);
    }
    else if(number.toString().length === 2) {
        object.tenners = number.toString().charAt(0);
        object.ones = number.toString().charAt(1);
    } else if(number.toString().length === 1) {
        object.ones = number.toString().charAt(0);
    }

    return object;
}

console.log(convertNumberToAnObject(222));
