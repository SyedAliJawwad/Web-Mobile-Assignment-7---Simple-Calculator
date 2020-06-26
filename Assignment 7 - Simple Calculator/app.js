var setNumber = (num) => {
    document.querySelector('.input').value += num;
}

var clearOutput = () => {
    document.querySelector('.input').value = "";
    document.querySelector('.history-value').value = "";
}

var calulateInputs = () => {
    try {
        var historyValue = document.querySelector('.history-value');
        var input = document.querySelector('.input');
        if (input.value === "") {
            document.querySelector('.input').value = "";
        }
        else {
            historyValue.value = historyValue.value + " " + input.value;
            console.log(input.value);
            input.value = eval(input.value);
        }
    }
    catch {
        document.querySelector('.input').value = "Invalid Operation";
    }
}


var backspace = (num) => {
    var value = document.querySelector(".input").value;
    console.log(value);
    document.querySelector(".input").value = value.substr(0, value.length - 1);
}
