let homeEl = document.getElementById("homeScore")
let guestEl = document.getElementById("guestScore")

let scoreHome = 0
let scoreGuest = 0


// Home Score
function inc1PointHome() {
    scoreHome += 1
    homeEl.textContent = scoreHome
    if (scoreHome > scoreGuest) {
        homeEl.classList.add("winner")
        guestEl.classList.remove("winner")
    }
}

function inc2PointHome() {
    scoreHome += 2
    homeEl.textContent = scoreHome
    if (scoreHome > scoreGuest) {
        homeEl.classList.add("winner")
        guestEl.classList.remove("winner")
    }
}

function inc3PointHome() {
    scoreHome += 3
    homeEl.textContent = scoreHome
    if (scoreHome > scoreGuest) {
        homeEl.classList.add("winner")
        guestEl.classList.remove("winner")
    }
}


// Guest Score
function inc1PointGuest() {
    scoreGuest += 1
    guestEl.textContent = scoreGuest
    if (scoreGuest > scoreHome) {
        guestEl.classList.add("winner")
        homeEl.classList.remove("winner")
    }
}

function inc2PointGuest() {
    scoreGuest += 2
    guestEl.textContent = scoreGuest
    if (scoreGuest > scoreHome) {
        guestEl.classList.add("winner")
        homeEl.classList.remove("winner")
    }
}

function inc3PointGuest() {
    scoreGuest += 3
    guestEl.textContent = scoreGuest
    if (scoreGuest > scoreHome) {
        guestEl.classList.add("winner")
        homeEl.classList.remove("winner")
    }
}


// Reset Button 
function reset() {
    scoreGuest = 0
    scoreHome = 0
    homeEl.textContent = scoreHome
    guestEl.textContent = scoreGuest
    homeEl.classList.remove("winner")
    guestEl.classList.remove("winner")
}


