let home = document.getElementById('home')
let guest = document.getElementById('guest')
let count = 0

function plus1() {
    count += 1
    home.textContent = count;
}
function plus2() {
    count += 2
    home.textContent = count;
}

function plus3() {
    count += 3
    home.textContent = count;
}

function plus1Guest() {
    count += 1
    guest.textContent = count;
}
function plus2Guest() {
    count += 2
    guest.textContent = count;
}

function plus3Guest() {
    count += 3
    guest.textContent = count;
}

// Reset function

function reset() {
    count = 0;
    home.textContent = 0;
    guest.textContent = 0;
}