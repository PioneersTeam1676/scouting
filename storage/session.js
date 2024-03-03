
/**
 * SESSION KEYS:
 * ---------------------
 * session-user             - json; info for current user
 * session-user-super       - bool; if current session is in super scout mode
 * session-user-globals     - json; stores default match settings (competition, alliance, and position)
 * 
 * session-sync-auto        - bool; if globals are to be synced via our centralized system
 * session-sync-timestamp   - int; timestamp of the last auto-sync (if applicable)
 * 
 * session-scout-values     - json; captures the most current state of fields on the scout tab
 * session-scout-auto-path  - str; captures the most current state of the auto path iframe on the scout tab
 * session-scout-history    - json[]; stores a copy of the scout tab fields each time the form is reset
 * 
 * session-ui-tab           - string; the id of the last tab viewed (to be restored on a fresh launch)
 * ---------------------
 */


/* LOCAL STORAGE HELPER FUNCTIONS */

function storeData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function retrieveData(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null; // Parse if value exists, otherwise return null
}

function deleteData(key) {
  localStorage.removeItem(key);
}


/* TIME HELPER FUNCTION */

function getTimestampInSeconds() {
  return Math.floor(Date.now() / 1000);
}


/* UPDATE SERVICE WORKER */

function updateServiceWorker() {
    location.reload();
}

function reloadSite() {
    $("#loader").fadeIn();
    setTimeout(function() {
        location.reload();
    }, 500);
}


/* IS ACTIVE SESSION? */

let user = retrieveData("session-user");

if (user != null) {
    setPage(1, pageCount);
    viewProfile.src = "./assets/img/profiles/100/" + user.dashboard_img_2;
    viewName.innerHTML = user.name;
    viewUID.innerHTML = user.uid;
    settingsProfile.src = "./assets/img/profiles/100/" + user.dashboard_img_2;
    settingsName.innerHTML = user.name;
    settingsEmail.innerHTML = user.mail;
    settingsUID.innerHTML = user.uid;
} else {
    document.querySelector('ion-modal.login-modal').isOpen = true;
}

setTimeout(function() {
    $("#loader").fadeOut();
}, 100);


/* IS SUPER SCOUT? */

if (retrieveData("session-user-super")) {
    $("#super-tag").css("display", "block");
}


/* AUTO SYNC COMP, ALLIANCE, & POSITION */

async function autoSyncNow() {
    const response = await fetch(apiEndpoint + "sync.php?uid=" + retrieveData("session-user").uid);
    const data = await response.json();
    competitionSelect.value = data.competition;
    allianceSelect.value = data.alliance;
    positionSelect.value = data.position;
    storeData("session-user-globals", data);
    
    // TO-DO: Cleanup date handling
    storeData("session-sync-timestamp", getTimestampInSeconds());
    let date = new Date();
    autoSyncDatetime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function setGlobalSelectorState(state) {
    competitionSelect.disabled = state;
    allianceSelect.disabled = state;
    positionSelect.disabled = state;
    if (state) {
        competitionSelect.parentElement.style.display = "none";
        allianceSelect.parentElement.style.display = "none";
        positionSelect.parentElement.style.display = "none";
    } else {
        competitionSelect.parentElement.style.display = "block";
        allianceSelect.parentElement.style.display = "block";
        positionSelect.parentElement.style.display = "block";
    }
}

autoSyncToggle.addEventListener('ionChange', function(e) {
    if (autoSyncToggle.checked) {
        setGlobalSelectorState(true);
        storeData("session-sync-auto", true);
        autoSyncNow();
    } else {
        setGlobalSelectorState(false);
        storeData("session-sync-auto", false);
        autoSyncDatetime.innerHTML = "N/A";
    }
});

[competitionSelect, allianceSelect, positionSelect].forEach(select => {
    select.addEventListener('ionChange', function(e) {
        let sessionGlobals = retrieveData("session-user-globals");
        sessionGlobals[select.dataset.ref] = select.value;
        storeData("session-user-globals", sessionGlobals);
    });
});

if (retrieveData("session-sync-auto") === null) {
    storeData("session-sync-auto", true);
    setGlobalSelectorState(true);
}

if (window.navigator.onLine && retrieveData("session-sync-auto")) {
    autoSyncNow();
    autoSyncToggle.checked = "true";
    setGlobalSelectorState(true);
} else if (retrieveData("session-sync-auto") && retrieveData("session-sync-timestamp")) {
    autoSyncDatetime.innerHTML = retrieveData("session-sync-timestamp");
} else {
    let sessionGlobals = retrieveData("session-user-globals");
    competitionSelect.value = sessionGlobals.competition;
    allianceSelect.value = sessionGlobals.alliance;
    positionSelect.value = sessionGlobals.position;
    setGlobalSelectorState(false);
    autoSyncDatetime.innerHTML = "N/A";
}


/* STORE ACTIVE TAB */

tabs.addEventListener("ionTabsDidChange", function(){
    tabs.getSelected().then((response) => {
        storeData("session-ui-tab", response);
    });
});
  
document.addEventListener("DOMContentLoaded", function() {
    try {
        const initTab = retrieveData('session-ui-tab') ? retrieveData('session-ui-tab') : 'scout';
        tabs.select(initTab);
    } catch {
        console.log("Tab session restore failed. Expected behavior for webkit browsers.");
    }
});


/* STORE TEXT SIZE */

textRangeSelect.addEventListener("ionChange", function(){
    storeData("session-text-size", textRangeSelect.value);
    changeTextStyles(textRangeSelect.value);
});

const initTextSelected = retrieveData('session-text-size') ? retrieveData('session-text-size') : '4';
textRangeSelect.value = initTextSelected;
changeTextStyles(initTextSelected);

function changeTextStyles(size) {
    document.documentElement.style.fontSize = (9 + parseInt(size)) + 'pt';
}


/* LOGOUT SCRIPT */

function logout() {
    if (confirm("This will clear all form data. If you are in the middle of a match, please wait until the match data has been submitted.")) {
        $("#loader").fadeIn();
        deleteData('session-user');
        deleteData('session-scout-values');
        storeData("session-user-super", false);
        setTimeout(function() {
            location.reload();
        }, 500);
    }
}

function reset() {
    deleteData('session-scout-values');
    setTimeout(function() {
        location.reload();
    }, 500);
}


/* SAVE MATCH FORM STATE */

let initInputValues = retrieveData("session-scout-values");
let inputValues = initInputValues ? initInputValues : {};
let elements = [input1_match, input1_team, input1_team_red, input1_team_blue, input1_noshow, input1_closest, input1_middle, input1_furthest, input2_robot_left_start, input2_speaker_scored_tele, input2_speaker_missed_tele, input2_speaker_scored_auto, input2_speaker_missed_auto, input2_amp_scored_tele, input2_amp_missed_tele, input2_amp_scored_auto, input2_amp_missed_auto, input2_trap_scored, input2_trap_missed, input2_park_fell, input2_park_ignored, input2_park_solo, input2_park_chain, input2_park_buddy, input2_peg_score, input2_peg_miss, input2_cooper_yes, input2_cooper_no];
let superscout_elements = [input4_amplified_scored, input4_amplified_missed, input4_offense_defense_notes, input4_amp_strat_notes, input4_climb_notes];
elements = [...elements, ...superscout_elements, ...$('input[name="range-offense-rating"]'), ...$('input[name="range-defense-rating"]'), ...$('input[name="score-pref"]'), ...$('input[name="range-player-rating"]'), ...$('input[name="range-ampstrat-rating"]'), ...$('input[name="climb-rating"]'), ...$('input[name="broken-select"]')];

// Function to update inputValues for radio buttons specifically
function updateRadioValues(name) {
    // Find the selected radio button in the group by name
    const selectedRadio = document.querySelector(`input[name="${name}"]:checked`);
    // Update inputValues with the value of the selected radio button, or null if none are selected
    inputValues[name] = selectedRadio ? selectedRadio.id : null;
}

// Function to update the inputValues based on element type
function updateInputValues(element) {
    if(element.type === "checkbox") {
        // For checkboxes, use checked property
        inputValues[element.id] = element.checked;
    } else if(element.type === "radio") {
        // For radio buttons, update based on the name group
        updateRadioValues(element.name);
    } else {
        // For text inputs, use the value property
        inputValues[element.id] = element.value;
    }
}

// Update element value or checked state based on stored inputValues
function setElementState(element) {
    if (inputValues[element.id] || inputValues[element.name]) {
        if (element.type === "checkbox") {
            element.checked = inputValues[element.id];
        } else if (element.type === "radio") {
            // For radio, check if this radio's id matches the stored value
            element.checked = element.id === inputValues[element.name];
        } else {
            element.value = inputValues[element.id];
        }
    }
}

function inputWasChanged(elem) {
    updateInputValues(elem);
    storeData("session-scout-values", inputValues);
}

// Initial population of the inputValues object and setup of event listeners
elements.forEach(element => {
    // Set the element state based on stored values
    setElementState(element);
    
    // Load view
    if (input1_match.value) viewMatchNumber.innerHTML = input1_match.value;
    if (input1_team.value) viewRobotNumber.innerHTML = input1_team.value;
    if (input1_team_red.checked || input1_team_blue.checked) {
        viewAlliance.innerHTML = input1_team_red.checked ? "RED" : (input1_team_blue.checked ? "BLUE" : "");
        viewAlliance.style.color = input1_team_red.checked ? "#dc3545" : (input1_team_blue.checked ? "#0d6efd" : "");
    }
    if (input1_noshow.checked || input1_closest.checked || input1_middle.checked || input1_furthest.checked) {
        viewPosition.innerHTML = input1_noshow.checked ? "NO SHOW" : (input1_closest.checked ? "CLOSE" : (input1_middle.checked ? "MIDDLE" : (input1_furthest.checked ? "FAR" : "")));
    }

    // Add an event listener to each element for real-time updates
    element.addEventListener('input', () => {
        inputWasChanged(element);
    });
});

function resetScoutForm() {
    let nextScoutGlobals = retrieveData("session-user-globals");
    let nextScoutMatchValue = (retrieveData("session-scout-values")) ? parseInt(retrieveData("session-scout-values")["input1-match"]) + 1 : 1;
    deleteData("session-scout-values");
    
    input1_match.value = nextScoutMatchValue;
    input1_team.value = null;
    input1_team_red.checked = false;
    input1_team_blue.checked = false;
    input1_noshow.checked = false;
    input1_closest.checked = false;
    input1_middle.checked = false;
    input1_furthest.checked = false;
    input2_robot_left_start.checked = false;
    input2_speaker_scored_tele.value = 0;
    input2_speaker_missed_tele.value = 0;
    input2_speaker_scored_auto.value = 0;
    input2_speaker_missed_auto.value = 0;
    input2_amp_scored_tele.value = 0;
    input2_amp_missed_tele.value = 0;
    input2_amp_scored_auto.value = 0;
    input2_amp_missed_auto.value = 0;
    input2_trap_scored.value = 0;
    input2_trap_missed.value = 0;
    input2_park_fell.checked = false;
    input2_park_ignored.checked = false;
    input2_park_solo.checked = false;
    input2_park_chain.checked = false;
    input2_park_buddy.checked = false;
    input2_peg_score.checked = false;
    input2_peg_miss.checked = false;
    input2_cooper_yes.checked = false;
    input2_cooper_no.checked = false;
    
    input3_auto_path_selector.src = "selector.html?";
    storeData("session-scout-auto-path", "");
    
    input4_amplified_scored.value = 0;
    input4_amplified_missed.value = 0;
    input4_offense_defense_notes.value = "";
    input4_amp_strat_notes.value = "";
    input4_climb_notes.value = "";
    
    $('input[name="range-offense-rating"]').prop('checked', false);
    $('input[name="range-defense-rating"]').prop('checked', false);
    $('input[name="score-pref"]').prop('checked', false);
    $('input[name="range-player-rating"]').prop('checked', false);
    $('input[name="range-ampstrat-rating"]').prop('checked', false);
    $('input[name="climb-rating"]').prop('checked', false);
    $('input[name="broken-select"]').prop('checked', false);
    
    $('#input4-broken-no').prop('checked', true);
    
    if (nextScoutGlobals.alliance == 1) {
        input1_team_blue.checked = true;
    } else {
        input1_team_red.checked = true;
    }
    if (nextScoutGlobals.position == 1) {
        input1_furthest.checked = true;
    } else if (nextScoutGlobals.position == 2) {
        input1_middle.checked = true;
    } else {
        input1_closest.checked = true;
    }
    
    elements.forEach(element => {
        inputWasChanged(element);
    });
    
    setPage(1, pageCount);
}

if (retrieveData("session-scout-values") === null) {
    resetScoutForm();
}


/* LISTEN FOR AUTO PATH CHANGES */

let autoPath = (retrieveData('session-scout-auto-path')) ? retrieveData('session-scout-auto-path') : "";

setInterval(function() {
    var currentHref = input3_auto_path_selector.contentWindow.location.href;
    var currentAutoPath = (currentHref.indexOf("?") > -1) ? (currentHref.split("?")[1]) : "";
    if (autoPath !== currentAutoPath) {
        autoPath = currentAutoPath;
        updateAutoPathIFrame();
    }
}, 1000);

function updateAutoPathIFrame() {
    storeData("session-scout-auto-path", autoPath);
    input3_auto_path_selector.src = "selector.html?" + autoPath;
}

updateAutoPathIFrame();


/* MATCH SUBMITTED; ARCHIVE MATCH FORM STATE */

function matchSubmitted(insert_id, score_data) {
    let scoutHistory = (retrieveData("session-scout-history")) ? retrieveData("session-scout-history") : [];
    let newMatchArchive = {
        insert_id: insert_id,
        user_id: score_data.uid,
        lookup_data: {
            comp_num: score_data.comp_num,
            match_num: score_data.match_num,
            team_num: score_data.team_num
        },
        score_data: score_data,
        super_scout: retrieveData("session-user-super"),
        created: getTimestampInSeconds(),
        updated: null
    }
    newMatchArchive["form_data"] = retrieveData("session-scout-values");
    scoutHistory.push(newMatchArchive);
    storeData("session-scout-history", scoutHistory);
    repaintDeviceHistory();
    resetScoutForm();
    presentAlert();
}

async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Match Submitted!';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    await alert.present();
}


/* REPAINT DEVICE HISTORY */

function repaintDeviceHistory() {
    let scoutHistory = (retrieveData("session-scout-history")) ? retrieveData("session-scout-history") : [];
    
    deviceHistoryList.innerHTML = '';
    
    scoutHistory.forEach((record) => {
        const isSynced = record.insert_id && record.insert_id > 0;
        const isSuper = record.super_scout;
        const itemHTML = `
          <ion-item>
            <ion-row>
              <ion-col>
                <ion-label>${isSuper ? '<ion-icon name="star-outline"></ion-icon>&nbsp;' : ''}Match: ${record.lookup_data.match_num}</ion-label>
              </ion-col>
              <ion-col style="width: 174px;">
                <ion-label>Team: ${record.lookup_data.team_num}</ion-label>
              </ion-col>
              <ion-col>
                <ion-label style="color:${isSynced ? 'green' : 'red'}; text-align: end;"> ${isSynced ? 'Saved' : 'Pending'}</ion-label>
              </ion-col>
            </ion-row>
          </ion-item>
        `;
        
        deviceHistoryList.insertAdjacentHTML('beforeend', itemHTML);
    });
}

repaintDeviceHistory();


/* LIVE UPDATE THE VIEW */

elements.slice(0, 8).forEach(element => {
    element.addEventListener('input', () => {
        viewMatchNumber.innerHTML = input1_match.value;
        viewRobotNumber.innerHTML = input1_team.value;
        viewAlliance.innerHTML = input1_team_red.checked ? "RED" : (input1_team_blue.checked ? "BLUE" : "");
        viewAlliance.style.color = input1_team_red.checked ? "#dc3545" : (input1_team_blue.checked ? "#0d6efd" : "");
        viewPosition.innerHTML = input1_noshow.checked ? "NO SHOW" : (input1_closest.checked ? "CLOSE" : (input1_middle.checked ? "MIDDLE" : (input1_furthest.checked ? "FAR" : "")));
    });
});


/* FETCH DATA FROM SERVER */

let scout_data;
let override_reset = "";

function fetchScoutData() {
    $.ajax({
        url: apiEndpoint + "select.php?uid=" + retrieveData("session-user").uid + "&m=" + input1_match.value + "&t=" + input1_team.value + override_reset,
        type: "GET",
        contentType: "application/json",
        success: function(response, status){
            if (JSON.parse(response).response_code == 200) {
                response = JSON.parse(response);
                if (response.current_override_timestamp != null) {
                    let msg = "";
                    if (response.current_match != input1_match.value && response.current_team != input1_team.value) msg = "An admin has changed your match to '" + response.current_match + "' and your team to '" + response.current_team + "'.";
                    else if (response.current_match != input1_match.value) msg = "An admin has changed your match number to '" + response.current_match + "'.";
                    else if (response.current_team != input1_team.value) msg = "An admin has changed your team number to '" + response.current_team + "'.";
                    msg += " Press 'OK' to accept this change.";
                    if (confirm(msg)) {
                        input1_match.value = response.current_match;
                        input1_team.value = response.current_team;
                        viewMatchNumber.innerText = response.current_match;
                        viewRobotNumber.innerText = response.current_team;
                    }
                    override_reset = "&reset=1";
                } else {
                    override_reset = "";
                }
                scout_data = response.select_data;
                generateItemsAndButtons();
            } else {
                alert(response + "\nStatus: " + status);
            }
        },
        error: function(xhr, status, error) {
            alert(error + "\nStatus: " + status);
        }
    });
}

fetchScoutData();

setInterval(function() {
    fetchScoutData();
}, 10000);