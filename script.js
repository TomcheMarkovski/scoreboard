let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
let homeScoreBtnThree = document.getElementById("home-score-btn-3");

let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestScoreBtnTwo = document.getElementById("guest-score-btn-1");
let guestScoreBtnThree = document.getElementById("guest-score-btn-1");

let homeStoreEl = document.getElementById("home-score");
let guestStoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function increaseHomeScoreOne() {
    // homeScore = homeScore +1;
    homeScore += 1;
    homeStoreEl.textContent = homeScore;
}

function increaseHomeScoreTwo() {
    // homeScore = homeScore + 2;
    homeScore += 2;
    homeStoreEl.textContent = homeScore;
}

function increaseHomeScoreThree() {
    // homeScore = homeScore + 3;
    homeScore += 3;
    homeStoreEl.textContent = homeScore;
}

function increaseGuestScoreOne() {
    // guestScore = guestScore + 1;
    guestScore += 1 
    guestStoreEl.textContent = guestScore;
}

function increaseGuestScoreTwo() {
    // guestScore = guestScore + 1;
    guestScore += 2;
    guestStoreEl.textContent = guestScore;
}

function increaseGuestScoreThree() {
    // guestScore = guestScore + 1;
    guestScore += 3;
    guestStoreEl.textContent = guestScore;
}