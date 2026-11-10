let broj = 0;

function povecaj() {
    broj = broj + 1;
    document.getElementById("broj").textContent = broj;
}

function resetiraj() {
    broj = 0;
    document.getElementById("broj").textContent = broj;
}
