/* =========================================
   TOURNAMENT SEARCH
========================================= */

function searchTournament() {

    const search =
        document
        .getElementById("searchTournament")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".tournament-card");

    cards.forEach(card => {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(search)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}


/* =========================================
   TOURNAMENT FILTER
========================================= */

function filterTournaments() {

    const filter =
        document
        .getElementById("gameFilter")
        .value;

    const cards =
        document.querySelectorAll(".tournament-card");

    cards.forEach(card => {

        const game =
            card.getAttribute("data-game");

        if (filter === "all" || game === filter) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}


/* =========================================
   REGISTRATION MODAL
========================================= */

function openRegistration(tournamentName) {

    document.getElementById("registrationModal")
        .style.display = "flex";

    document.getElementById("selectedTournament")
        .innerText =
        "Register for: " + tournamentName;

}


function closeRegistration() {

    document.getElementById("registrationModal")
        .style.display = "none";

}


function registerTournament(event) {

    event.preventDefault();

    const player =
        document.getElementById("playerName").value;

    const team =
        document.getElementById("teamName").value;

    alert(
        "🎉 Registration Successful!\n\n" +
        "Player: " + player +
        "\nTeam: " + team
    );

    closeRegistration();

    event.target.reset();

}


/* =========================================
   TEAM MODAL
========================================= */

function openTeamModal() {

    document.getElementById("teamModal")
        .style.display = "flex";

}


function closeTeamModal() {

    document.getElementById("teamModal")
        .style.display = "none";

}


function createTeam(event) {

    event.preventDefault();

    const team =
        document.getElementById("newTeamName").value;

    const captain =
        document.getElementById("captainName").value;

    alert(
        "✅ Team Created Successfully!\n\n" +
        "Team: " + team +
        "\nCaptain: " + captain
    );

    closeTeamModal();

    event.target.reset();

}


/* =========================================
   LOGIN
========================================= */

function openLogin() {

    document.getElementById("loginModal")
        .style.display = "flex";

}


function closeLogin() {

    document.getElementById("loginModal")
        .style.display = "none";

}


function login(event) {

    event.preventDefault();

    alert("🎮 Login Successful!");

    closeLogin();

    event.target.reset();

}


/* =========================================
   COUNTDOWN TIMER
========================================= */

// Tournament date
const tournamentDate =
    new Date("September 15, 2026 18:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance =
        tournamentDate - now;

    if (distance <= 0) {

        document.getElementById("days").innerText = "50";
        document.getElementById("hours").innerText = "20";
        document.getElementById("minutes").innerText = "20";
        document.getElementById("seconds").innerText = "00";

        return;
    }

    const days =
        Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance % (1000 * 60))
            / 1000
        );

    document.getElementById("days")
        .innerText = String(days).padStart(2, "0");

    document.getElementById("hours")
        .innerText = String(hours).padStart(2, "0");

    document.getElementById("minutes")
        .innerText = String(minutes).padStart(2, "0");

    document.getElementById("seconds")
        .innerText = String(seconds).padStart(2, "0");

}

setInterval(updateCountdown, 1000);

updateCountdown();


/* =========================================
   LIVE SCORE SIMULATION
========================================= */

setInterval(() => {

    let score1 =
        parseInt(
            document.getElementById("team1Score")
                .innerText
        );

    let score2 =
        parseInt(
            document.getElementById("team2Score")
                .innerText
        );

    const random =
        Math.floor(Math.random() * 2);

    if (random === 0) {
        score1++;
    } else {
        score2++;
    }

    document.getElementById("team1Score")
        .innerText = score1;

    document.getElementById("team2Score")
        .innerText = score2;

}, 5000);


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

window.onclick = function(event) {

    const registration =
        document.getElementById("registrationModal");

    const team =
        document.getElementById("teamModal");

    const login =
        document.getElementById("loginModal");

    if (event.target === registration) {
        registration.style.display = "none";
    }

    if (event.target === team) {
        team.style.display = "none";
    }

    if (event.target === login) {
        login.style.display = "none";
    }

};