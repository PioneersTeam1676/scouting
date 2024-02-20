
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

if (retrieveData("session-super")) {
    $("#super-tag").css("display", "block");
}


/* STORE ACTIVE TAB */

tabs.addEventListener("ionTabsDidChange", function(){
    tabs.getSelected().then((response) => {
        storeData("session-tab", response);
    });
});
  
const initTab = (retrieveData('session-tab') ? retrieveData('session-tab') : 'scout');

try {
    tabs.select(initTab);
} catch {
    console.log("Tab session restore failed. Expected behavior for webkit browsers.");
}


/* STORE TEXT SIZE */

textRangeSelect.addEventListener("ionChange", function(){
    storeData("session-text-size", textRangeSelect.value);
    changeTextStyles(textRangeSelect.value);
});

const initTextSelected = retrieveData('session-text-size') ? retrieveData('session-text-size') : '2';
textRangeSelect.value = initTextSelected;
changeTextStyles(initTextSelected);

function changeTextStyles(size) {
    document.documentElement.style.fontSize = (11 + parseInt(size)) + 'pt';
}


/* LOGOUT SCRIPT */

function logout() {
    if (confirm("This will clear all form data. If you are in the middle of a match, please wait until the match data has been submitted.")) {
        $("#loader").fadeIn();
        deleteData('session-user');
        deleteData('session-scout-values');
        storeData("session-super", false);
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


/* SAVE PAGE STATE */

let initInputValues = retrieveData("session-scout-values");
let inputValues = initInputValues ? initInputValues : {};
let elements = [input1_match, input1_team, input1_team_red, input1_team_blue, input1_noshow, input1_closest, input1_middle, input1_furthest, input2_robot_left_start, input2_speaker_scored_tele, input2_speaker_missed_tele, input2_speaker_scored_auto, input2_speaker_missed_auto, input2_trap_scored, input2_trap_missed, input2_park_fell, input2_park_ignored, input2_park_solo, input2_park_chain, input2_park_buddy];

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

    // Add an event listener to each element for real-time updates
    element.addEventListener('input', () => {
        updateInputValues(element);

        // Store and log the updated JSON object to see the changes
        storeData("session-scout-values", inputValues);
        console.log(inputValues);
    });
});

// Log the initial state of inputValues
console.log(inputValues);


/* LIVE UPDATE THE VIEW */

elements.slice(0, 4).forEach(element => {
    element.addEventListener('input', () => {
        viewMatchNumber.innerHTML = input1_match.value;
        console.log(input1_match.value);
        viewRobotNumber.innerHTML = input1_team.value;
        viewAlliance.innerHTML = input1_team_red.checked ? "RED" : (input1_team_blue.checked ? "BLUE" : "");
        viewAlliance.style.color = input1_team_red.checked ? "#dc3545" : (input1_team_blue.checked ? "#0d6efd" : "");
    });
});