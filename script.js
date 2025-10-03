const myinput = document.getElementById("myinput")
let current_value = 1

function add(x) {
    current_value += Number(x)
    myinput.value = current_value
}