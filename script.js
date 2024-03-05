"use strict";

/* WALL OF CONSTANTS */

const pageCount = 6;

const input0_UID = document.querySelector("#input0-uid");
const input0_super_scout = document.querySelector("#superscout-switch");

const input1_match = document.querySelector("#input1-match"); // input number
const input1_team = document.querySelector("#input1-team"); // input number
const input1_team_red = document.querySelector("#input1-team-red"); // input radio
const input1_team_blue = document.querySelector("#input1-team-blue"); // input radio
const input1_noshow = document.querySelector("#input1-bot-noshow"); // input check
const input1_closest = document.querySelector("#input1-bot-closest"); // input check
const input1_middle = document.querySelector("#input1-bot-middle"); // input check
const input1_furthest = document.querySelector("#input1-bot-furthest"); // input check

const input2_robot_left_start = document.querySelector("#input2-robot-left-start"); // input check
const input2_speaker_scored_tele = document.querySelector("#input2-speaker-scored-tele"); // input number
const input2_speaker_missed_tele = document.querySelector("#input2-speaker-missed-tele"); // input number
const input2_speaker_scored_auto = document.querySelector("#input2-speaker-scored-auto"); // input number
const input2_speaker_missed_auto = document.querySelector("#input2-speaker-missed-auto"); // input number
const input2_amp_scored_tele = document.querySelector("#input2-amp-scored-tele"); // input number
const input2_amp_missed_tele = document.querySelector("#input2-amp-missed-tele"); // input number
const input2_amp_scored_auto = document.querySelector("#input2-amp-scored-auto"); // input number
const input2_amp_missed_auto = document.querySelector("#input2-amp-missed-auto"); // input number
const input2_trap_scored = document.querySelector("#input2-trap-scored"); // input number
const input2_trap_missed = document.querySelector("#input2-trap-missed"); // input number
const input2_park_fell = document.querySelector("#input2-park-fell"); // input radio
const input2_park_ignored = document.querySelector("#input2-park-ignored"); // input radio
const input2_park_solo = document.querySelector("#input2-park-solo"); // input radio
const input2_park_chain = document.querySelector("#input2-park-chain"); // input radio
const input2_park_buddy = document.querySelector("#input2-park-chain-buddy"); // input radio
const input2_peg_score = document.querySelector("#input2-peg-score"); // input check
const input2_peg_miss = document.querySelector("#input2-peg-miss"); // input check
const input2_cooper_yes = document.querySelector("#input2-cooper-yes"); // input check
const input2_cooper_no = document.querySelector("#input2-cooper-no"); // input check

const input3_auto_path_selector = document.querySelector("#input3-auto-path-selector");

const input4_amplified_scored = document.querySelector("#input4-amplified-scored");
const input4_amplified_missed = document.querySelector("#input4-amplified-missed");
const input4_offense_defense_notes = document.querySelector("#input4-offense-defense-notes");
const input4_amp_strat_notes = document.querySelector("#input4-amp-strat-notes");
const input4_climb_notes = document.querySelector("#input4-climb-notes");

const input0_next = document.querySelector("#input0-login");
const input1_next = document.querySelector("#input1-start");
const input2_next = document.querySelector("#input2-finish");
const input3_next = document.querySelector("#input3-next");
const input4_next = document.querySelector("#input4-next");

const viewMatchNumber = document.querySelector("#view-matchnum");
const viewRobotNumber = document.querySelector("#view-robotnum");
const viewAlliance = document.querySelector("#view-alliance");
const viewPosition = document.querySelector("#view-position");
const viewProfile = document.querySelector("#view-profile");
const viewName = document.querySelector("#view-name");
const viewUID = document.querySelector("#view-uid");

const modalProfile = document.querySelector("#modal-profile");
const modalName = document.querySelector("#modal-name");
const modalEmail = document.querySelector("#modal-email");

const tabs = document.querySelector('ion-tabs#bottom-tabs');

const deviceHistoryList = document.querySelector('ion-list#device-history-list');

const settingsProfile = document.querySelector("#settings-profile");
const settingsName = document.querySelector("#settings-name");
const settingsEmail = document.querySelector("#settings-email");
const settingsUID = document.querySelector("#settings-uid");

const textRangeSelect = document.querySelector('ion-range#text-select');
const autoSyncToggle = document.querySelector('ion-toggle#auto-sync-toggle');
const competitionSelect = document.querySelector('ion-select#competition-select');
const allianceSelect = document.querySelector('ion-select#alliance-select');
const positionSelect = document.querySelector('ion-select#position-select');
const autoSyncDatetime = document.querySelector('span#auto-sync-datetime');

input0_UID.addEventListener("input", () => {
    if (input0_UID.value >= 1000) {
        input0_super_scout.disabled = false;
    } else {
        input0_super_scout.disabled = true;
    }
    input0_super_scout.checked = false;
    user = users.find(obj => obj.uid == input0_UID.value);
    modalProfile.src = "./assets/img/profiles/100/" + user.dashboard_img_2;
    modalName.innerText = user.name;
    modalEmail.innerText = user.mail;
});

input0_next.addEventListener("click", () => {
    const valid = validateFormInput(0);
    if (valid.valid) {
        setPage(1, pageCount);
        viewProfile.src = "./assets/img/profiles/100/" + user.dashboard_img_2;
        viewName.innerHTML = user.name;
        viewUID.innerHTML = user.uid;
        settingsProfile.src = "./assets/img/profiles/100/" + user.dashboard_img_2;
        settingsName.innerHTML = user.name;
        settingsEmail.innerHTML = user.mail;
        settingsUID.innerHTML = user.uid;
        storeData("session-user", user);
        storeData("session-user-super", input0_super_scout.checked);
        document.querySelector('ion-modal.login-modal').dismiss();
        document.querySelector('ion-modal.check-user').dismiss();
        if (input0_super_scout.checked) $("#super-tag").css("display", "block");
    } else {
        alert(valid.reason);
    }
});

input1_next.addEventListener("click", () => {
    const valid = validateFormInput(1);
    if (valid.valid) {
        checkTeamInMatch(input1_match.value, input1_team.value).then(result => {
            if (result) {
                if (retrieveData("session-user-super")) {
                    setPage(3, pageCount);
                } else {
                    setPage(2, pageCount);
                }
            } else {
                alert("Team " + input1_team.value + " is not in match " + input1_match.value + ".");
            }
        })
        .catch(error => console.error("Error checking team in match:", error));
    } else {
        alert(valid.reason);
    }
});

async function checkTeamInMatch(matchNum, teamNum) {
    try {
        const response = await fetch(`${apiEndpoint}verify_match_team.php?match_num=${matchNum}&team_num=${teamNum}`);
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        return false;
    }
}

input2_next.addEventListener("click", () => {
    const valid = validateFormInput(2);
    if (valid.valid) {
        let score_data = {
            uid: retrieveData("session-user").uid,
            comp_num: retrieveData("session-user-globals").competition,
            match_num: input1_match.value,
            team_num: input1_team.value,
            alliance: (input1_team_blue.checked ? 1 : 2),
            position: (input1_closest.checked ? 3 : (input1_middle.checked ? 2 : (input1_furthest.checked ? 1 : 0))),
            mobility: (input2_robot_left_start.checked ? 1 : 2),
            auto_amp_scored: input2_speaker_scored_auto.value,
            auto_amp_missed: input2_speaker_missed_auto.value,
            auto_spkr_scored: input2_amp_scored_auto.value,
            auto_spkr_missed: input2_amp_missed_auto.value,
            tele_amp_scored: input2_speaker_scored_tele.value,
            tele_amp_missed: input2_speaker_missed_tele.value,
            tele_spkr_scored: input2_amp_scored_tele.value,
            tele_spkr_missed: input2_amp_missed_tele.value,
            trap_scored: input2_trap_scored.value,
            trap_missed: input2_trap_missed.value,
            climb: (input2_park_buddy.checked ? 5 : (input2_park_chain.checked ? 4 : (input2_park_solo.checked ? 3 : (input2_park_ignored.checked ? 2 : (input2_park_fellcl ? 1 : 0))))),
            grnd_pickup: 0,
            src_pickup: 0,
            subwfr_shots: 0,
            podium_shots: 0,
            stg_lg_shots: 0,
            coopertition: (input2_cooper_yes.checked ? 1 : 2),
            harmony: (input2_peg_score.checked ? 1 : 2)
        };
        
        $.ajax({
            url: apiEndpoint + "insert.php",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(score_data),
            success: function(response, status){
                if (JSON.parse(response).response_code == 201) {
                    matchSubmitted(JSON.parse(response).insert_id, score_data); // trigger archive of form values in session.js
                } else {
                    alert(response + "\nStatus: " + status);
                }
            },
            error: function(xhr, status, error) {
                alert(error + "\nStatus: " + status);
            }
        });
    } else {
        alert(valid.reason);
    }
});

input3_next.addEventListener("click", () => {
    const valid = validateFormInput(3);
    if (valid.valid) {
        setPage(4, pageCount);
    } else {
        alert(valid.reason);
    }
});

input4_next.addEventListener("click", () => {
    let score_data = {
        uid: retrieveData("session-user").uid,
        comp_num: retrieveData("session-user-globals").competition,
        match_num: input1_match.value,
        team_num: input1_team.value,
        alliance: (input1_team_blue.checked ? 1 : 2),
        position: (input1_closest.checked ? 3 : (input1_middle.checked ? 2 : (input1_furthest ? 1 : 0))),
        
        auto_path: (input3_auto_path_selector.contentWindow.location.href).split("?")[1],
        amplified_scored: input4_amplified_scored.value,
        amplified_missed: input4_amplified_missed.value,
        offense_rate: $('input[name="range-offense-rating"]:checked').val(),
        defense_rate: $('input[name="range-defense-rating"]:checked').val(),
        offense_defense_notes: input4_offense_defense_notes.value,
        score_focus: $('input[name="score-pref"]:checked').val(),
        drive_team_rate: $('input[name="range-player-rating"]:checked').val(),
        amp_strat_rate: $('input[name="range-ampstrat-rating"]:checked').val(),
        amp_strat_notes: input4_amp_strat_notes.value,
        
        climb_attempts: 0,
        trap_attempts: 0,
        human_frisbee: 0,
        climb_rate: $('input[name="climb-rating"]:checked').val(),
        climb_notes: input4_climb_notes.value,
        robot_broke: $('input[name="broken-select"]:checked').val()
    };
    
    $.ajax({
        url: apiEndpoint + "insert_ss.php",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(score_data),
        success: function(response, status){
            console.log(response);
            if (JSON.parse(response).response_code == 201) {
                matchSubmitted(JSON.parse(response).insert_id, score_data); // trigger archive of form values in session.js
                console.log("SUCCESS!!!", response);
            } else {
                alert(response + "\nStatus: " + status);
            }
        },
        error: function(xhr, status, error) {
            alert(error + "\nStatus: " + status);
        }
    });
});

document.getElementById('input1-team').addEventListener('input', function() {
    const input1_match = document.getElementById('input1-match').value;
    const input1_team = this.value;

    if (input1_match && input1_team) {
        fetch(`${apiEndpoint}matches.php?input1_match=${input1_match}&input1_team=${input1_team}`)
            .then(response => response.json())
            .then(data => {
                const suggestionsContainer = document.getElementById('suggestions');
                suggestionsContainer.innerHTML = '';
                console.log(data);
                data.forEach(item => {
                    const div = document.createElement('div');
                    div.textContent = item;
                    div.style.cursor = 'pointer';
                    div.addEventListener('click', function() {
                        document.getElementById('input1-team').value = this.textContent;
                        suggestionsContainer.innerHTML = '';
                    });
                    // suggestionsContainer.appendChild(div);
                });
            })
            .catch(error => console.error('Error:', error));
    }
});


function isNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

function validateFormInput(pageIdx) {
    if (pageIdx == 0) {

        const valid = isNumber(input0_UID.value);
        if (!valid) return { valid: false, reason: "Student UID is not a number" };

        // TODO: replace bound check with intended checking behavior
        const bound = parseFloat(input0_UID.value) > 1000;
        if (!bound) return { valid: false, reason: "Student UID is not a valid UID" };

        return { valid: true, data: {
            uid: input0_UID.value,
            super_scout: input0_super_scout.checked
        } };

    } else if (pageIdx == 1) {

        // make sure the match and team are valid numbers
        const matchValid = isNumber(input1_match.value);
        if (!matchValid) return { valid: false, reason: "Match value is not a number" };
        const teamValid = isNumber(input1_team.value);
        if (!teamValid) return { valid: false, reason: "Please enter a valid team number" };

        // make sure they aren't zero or less
        const matchBound = parseFloat(input1_match.value) >= 0;
        if (!matchBound) return { valid: false, reason: "Match value is not within bounds" };
        const teamBound = parseFloat(input1_match.value) >= 0;
        if (!teamBound) return { valid: false, reason: "Team value is not within bounds" };

        // check the team color
        const teamRed = input1_team_red.checked;
        const teamBlue = input1_team_blue.checked;
        if (teamRed == teamBlue) return { valid: false, reason: "Must select either red team or blue team" };

        // check the robot position
        let noshow = input1_noshow.checked;
        let closest = input1_closest.checked;
        let middle = input1_middle.checked;
        let furthest = input1_furthest.checked;
        let poses = [noshow, closest, middle, furthest];
        let total = poses.reduce((acc, value) => value === true ? acc + 1 : acc, 0);

        if (total == 0) return { valid: false, reason: "Must select a robot position" };
        if (total != 1) return { valid: false, reason: "Something went wrong with the total position" };

        return { valid: true, data: {
            match_num: input1_match.value, 
            team_num: input1_team.value, 
            alliance: teamBlue ? 2 : teamRed ? 1 : 0,
            position: noshow ? 0 : closest ? 3 : middle ? 2 : furthest ? 1 : 0,
        } };

    } else if (pageIdx == 2) {

        // make sure spkr scoring is all numbers
        const spkrScoredTele = (input2_speaker_scored_tele.value === "") ? 0 : input2_speaker_scored_tele.value;
        const spkrMissedTele = (input2_speaker_missed_tele.value === "") ? 0 : input2_speaker_missed_tele.value;
        const spkrScoredAuto = (input2_speaker_scored_auto.value === "") ? 0 : input2_speaker_scored_auto.value;
        const spkrMissedAuto = (input2_speaker_missed_auto.value === "") ? 0 : input2_speaker_missed_auto.value;
        const spkrScores = [spkrScoredTele, spkrMissedTele, spkrScoredAuto, spkrMissedAuto];
        if (spkrScores.some(score => !isNumber(score)))
            return { valid: false, reason: "Must input numbers for speaker scoring" };
        if (spkrScores.some(score => score < 0))
            return { valid: false, reason: "Speaker scores must be more than or equal to zero" };
            
        // make sure amp scoring is all numbers
        const ampScoredTele = (input2_amp_scored_tele.value === "") ? 0 : input2_amp_scored_tele.value;
        const ampMissedTele = (input2_amp_missed_tele.value === "") ? 0 : input2_amp_missed_tele.value;
        const ampScoredAuto = (input2_amp_scored_auto.value === "") ? 0 : input2_amp_scored_auto.value;
        const ampMissedAuto = (input2_amp_missed_auto.value === "") ? 0 : input2_amp_missed_auto.value;
        const ampScores = [ampScoredTele, ampMissedTele, ampScoredAuto, ampMissedAuto]
        if (ampScores.some(score => !isNumber(score)))
            return { valid: false, reason: "Must input numbers for amp scoring" };
        if (ampScores.some(score => score < 0))
            return { valid: false, reason: "Amp scores must be more than or equal to zero" };
            
        // make sure trap scoring is all numbers
        const trapScored = (input2_trap_scored.value === "") ? 0 : input2_trap_scored.value;
        const trapMissed = (input2_trap_missed.value === "") ? 0 : input2_trap_missed.value;
        if (!isNumber(trapScored) || !isNumber(trapMissed))
            return { valid: false, reason: "Trap scores must be numbers" };
        if (trapScored < 0 || trapMissed < 0)
            return { valid: false, reason: "Trap scores must be more than or equal to zero" };

        // check parking radio
        const parkFell = input2_park_fell.checked;
        const parkIgnored = input2_park_ignored.checked;
        const parkSolo = input2_park_solo.checked;
        const parkChain = input2_park_chain.checked;
        const parkBuddy = input2_park_buddy.checked;
        const parks = [parkFell, parkIgnored, parkSolo, parkChain, parkBuddy];

        const total = parks.reduce((acc, value) => value === true ? acc + 1 : acc, 0);
        if (total == 0) return { valid: false, reason: "Must select a robot parking position" };
        if (total != 1) return { valid: false, reason: "Something went wrong with the total parking position" };

        return { valid: true, data: {
            tele_spkr_scored: spkrScoredTele,
            tele_spkr_missed: spkrMissedTele,
            auto_spkr_scored: spkrScoredAuto,
            auto_spkr_missed: spkrMissedAuto,
            tele_amp_scored: ampScoredTele,
            tele_amp_missed: ampMissedTele,
            auto_amp_scored: ampScoredAuto,
            auto_amp_missed: ampMissedAuto,
            trap_scored: trapScored,
            trap_missed: trapMissed,
            climb: (parkFell ? 1 : (parkIgnored ? 2 : (parkSolo ? 3 : (parkChain ? 4 : (parkBuddy ? 5 : 0)))))
        } };

    } else if (pageIdx == 3) {

        return { valid: true };

    } else {

        return { valid: false, reason: "Something went wrong" };

    }
}

function setPage(num, pageCount) {
    for (let i = 0; i < pageCount; i++) {
        const pageDivs = document.querySelectorAll(`.page-${i}`);
        for (let pageDiv of pageDivs) {
            if (i == num) {
                pageDiv.classList.add("page-visible");
                pageDiv.classList.remove("page-invisible");
            } else {
                pageDiv.classList.remove("page-visible");
                pageDiv.classList.add("page-invisible");
            }
        }
    }

    let viewEnabled = [1, 2, 3, 4, 5];
    const view = document.querySelectorAll(`.view`).item(0);
    if (viewEnabled.includes(num)) {
        view.classList.add("page-visible");
        view.classList.remove("page-invisible");
    } else {
        view.classList.add("page-invisible");
        view.classList.remove("page-visible");

    }

    window.scrollTo(0, 0);
}

function submit() {

    if (input0_super_scout.checked) {
        alert("I didn't do superscouting yet oopsie...");
    } else {
        const form0 = validateFormInput(0);
        const form1 = validateFormInput(1);
        const form2 = validateFormInput(2);
    
        if (!form0.valid) {
            alert(form0.reason);
            return;
        } else if (!form1.valid) {
            alert(form1.reason);
            return;
        } else if (!form2.valid) {
            alert(form2.reason);
            return;
        }
    
        let payload = { ...form0.data, ...form1.data, ...form2.data };
        console.log(`PAYLOAD: ${payload}`);
    }
    

}

document.body.addEventListener("keydown", (e) => {
    if (['input', 'textarea'].includes(event.target.tagName.toLowerCase())) {
        return;
    }
    const c = e.key;
    if (c == "1") setPage(0, pageCount);
    else if (c == "2") setPage(1, pageCount);
    else if (c == "3") setPage(2, pageCount);
    else if (c == "4") setPage(3, pageCount);
    else if (c == "5") setPage(4, pageCount);
});


/* ONLINE DETECTOR */
let onlineIndicator = document.getElementById("online-indicator");
let onlineBlink = document.getElementById("online-blink");
let onlineText = document.getElementById("online-text");

function onlineTester() {
    if (window.navigator.onLine) {
        onlineBlink.style.backgroundColor = "#338d4d";
        onlineText.style.color = "#338d4d";
        onlineText.innerText = "Connected";
    } else {
        onlineBlink.style.backgroundColor = "#f56c6c";
        onlineText.style.color = "#f56c6c";
        onlineText.innerText = "Offline";
    }
}

setInterval(onlineTester, 2500);


/* PLUS / MINUS INPUT BTNS */
$(document).ready(function(){
    
    $('.quantity-right-plus').click(function(e){
        e.preventDefault();
        var quantityInput = $(this).closest('.input-group').find('.input-number');
        var quantity = (quantityInput.val() === "") ? 0 : parseInt(quantityInput.val());
        quantityInput.val(quantity + 1);
        inputWasChanged(quantityInput[0]);
    });

    $('.quantity-left-minus').click(function(e){
        e.preventDefault();
        var quantityInput = $(this).closest('.input-group').find('.input-number');
        var quantity = (quantityInput.val() === "") ? 0 : parseInt(quantityInput.val());
        if(quantity > 0){
            quantityInput.val(quantity - 1);
            inputWasChanged(quantityInput[0]);
        }
    });
});

/* RANGE ACCESSIBILITY */
const ranges = document.querySelectorAll("div.range");
ranges.forEach(range => {
    const rangeButtons = range.querySelectorAll("label.btn");
    rangeButtons.item(0).classList.add(["btn-outline-danger"]);
    rangeButtons.item(1).classList.add(["btn-outline-warning"]);
    rangeButtons.item(2).classList.add(["btn-outline-warning"]);
    rangeButtons.item(3).classList.add(["btn-outline-warning"]);
    rangeButtons.item(4).classList.add(["btn-outline-success"])
})