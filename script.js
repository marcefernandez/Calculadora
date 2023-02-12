let result = document.getElementById("result");

function insert(num) {
    result.value = result.value + num;
}

function clearAll() {
    result.value = "";
}

function backspace() {
    let str = result.value;
    result.value = str.substring(0, str.length - 1);
}

function calcular() {
    try {
        result.value = eval(result.value);
    } catch (err) {
        result.value = "Error";
    }
}
