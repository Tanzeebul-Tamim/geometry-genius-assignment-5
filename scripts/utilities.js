function inputField(field) {
    const inputField = document.getElementById(field);
    const inputString = inputField.value;
    const input = parseFloat(inputString);
    inputField.value = ""
    if (inputString == "") {
        alert ("Error: Please fill in all the fields");
        return null;
    }
    else if (isNaN(input) || input < 0) {
        alert ("Error: Please input a positive numeric value.");
        return null;
    }
    else {
        return input;
    }
}

