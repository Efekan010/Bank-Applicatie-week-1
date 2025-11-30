// Verwijdert placeholder bij klikken
function clearPlaceholder(input) {
    input.placeholder = "";
}

// Controleren of rekeningnummer begint met NL
function checkIBAN(input) {
    const value = input.value.trim();
    
    if (!value.startsWith("NL")) {
        input.classList.add("error");
    } else {
        input.classList.remove("error");
    }
}
