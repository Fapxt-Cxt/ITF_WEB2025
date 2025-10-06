let count = 0
function change() {
    const account = document.getElementById("account").value;
    const cash = document.getElementById("cash").value;
    
    count = count + 1
    const outputMassage = (count + ",Current account balance: " + account + ", Current cash balance: " + cash);
    const outputElement = document.getElementById("output");
    const existingOutput = outputElement.value;
    outputElement.value = outputMassage + "\n" + existingOutput;
}

function proceed() {
    const cash = document.getElementById("cash");
    const account = document.getElementById("account");
    const oper = document.getElementById("oper");
    const bankoper = document.getElementById("bankoper")

    count = count + 1
    const outputElement = document.getElementById("output");
    if (bankoper.value === "Deposit") {
        if (Number(cash.value) < Number(oper.value)) {
            const outputMassage = (count + ", Couldn't deposit entered balance. (Insufficient cash balance)");
            const existingOutput = outputElement.value;
            outputElement.value = outputMassage + "\n" + existingOutput;
        } else {
            account.value = Number(account.value) + Number(oper.value);
            cash.value = Number(cash.value) - Number(oper.value);
            const outputMassage = (count + ", Current account balance: " + account.value + ", Current cash balance: " + cash.value);
            const existingOutput = outputElement.value;
            outputElement.value = outputMassage + "\n" + existingOutput
        }
    } else if (bankoper.value === "Withdraw") {
        if (Number(account.value) < Number(oper.value)) {
            const outputMassage = (count + ", Couldn't withdraw entered balance. (Insufficient account balance)");
            const existingOutput = outputElement.value;
            outputElement.value = outputMassage + "\n" + existingOutput;
        } else {
        account.value = Number(account.value) - Number(oper.value);
        cash.value = Number(cash.value) + Number(oper.value);
        const outputMassage = (count + ", Current account balance: " + account.value + ", Current cash balance: " + cash.value);
        const existingOutput = outputElement.value;
        outputElement.value = outputMassage + "\n" + existingOutput;
        } 
    }
}
