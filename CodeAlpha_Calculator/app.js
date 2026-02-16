const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function cleardisplay() {
    display.value = "";
}

function calculator() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}



function backspace() {
    display.value = display.value.slice(0, -1);
}
