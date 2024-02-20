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
const input2_trap_scored = document.querySelector("#input2-trap-scored"); // input number
const input2_trap_missed = document.querySelector("#input2-trap-missed"); // input number
const input2_park_fell = document.querySelector("#input2-park-fell"); // input radio
const input2_park_ignored = document.querySelector("#input2-park-ignored"); // input radio
const input2_park_solo = document.querySelector("#input2-park-solo"); // input radio
const input2_park_chain = document.querySelector("#input2-park-chain"); // input radio
const input2_park_buddy = document.querySelector("#input2-park-chain-buddy"); // input radio

const input0_next = document.querySelector("#input0-login");
const input1_next = document.querySelector("#input1-start");
const input2_next = document.querySelector("#input2-finish");
const input3_next = document.querySelector("#input3-next");
const input4_next = document.querySelector("#input4-next");

const viewMatchNumber = document.querySelector("#view-matchnum");
const viewRobotNumber = document.querySelector("#view-robotnum");
const viewAlliance = document.querySelector("#view-alliance");
const viewProfile = document.querySelector("#view-profile");
const viewName = document.querySelector("#view-name");
const viewUID = document.querySelector("#view-uid");

const modalProfile = document.querySelector("#modal-profile");
const modalName = document.querySelector("#modal-name");
const modalEmail = document.querySelector("#modal-email");

const settingsProfile = document.querySelector("#settings-profile");
const settingsName = document.querySelector("#settings-name");
const settingsEmail = document.querySelector("#settings-email");
const settingsUID = document.querySelector("#settings-uid");

const tabs = document.querySelector('ion-tabs');
const textRangeSelect = document.querySelector('ion-range#text-select');

input0_UID.addEventListener("input", () => {
    if (input0_UID.value % 3 == 0 && input0_UID.value % 5 == 0) {
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
        storeData("session-super", input0_super_scout.checked);
        document.querySelector('ion-modal.login-modal').dismiss();
        document.querySelector('ion-modal.check-user').dismiss();
        if (input0_super_scout.checked) $("#super-tag").css("display", "block");
    } else {
        alert(`(Temporary Alert System) Invalid form. Reason: ${valid.reason}`);
    }
});

input1_next.addEventListener("click", () => {
    const valid = validateFormInput(1);
    if (valid.valid) {
        if (retrieveData("session-super")) {
            setPage(3, pageCount);
        } else {
            setPage(2, pageCount);
        }
    } else {
        alert(`(Temporary Alert System) Invalid form. Reason: ${valid.reason}`);
    }
});

input3_next.addEventListener("click", () => {
    const valid = validateFormInput(3);
    if (valid.valid) {
        setPage(4, pageCount);
    } else {
        alert(`(Temporary Alert System) Invalid form. Reason: ${valid.reason}`);
    }
});

input4_next.addEventListener("click", () => {

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

        return { valid: true };

    } else if (pageIdx == 1) {

        // make sure the match and team are valid numbers
        const matchValid = isNumber(input1_match.value);
        if (!matchValid) return { valid: false, reason: "Match value is not a number" };
        const teamValid = isNumber(input1_team.value);
        if (!teamValid) return { valid: false, reason: "Match team is not a number" };

        // make sure they aren't zero or less
        const matchBound = parseFloat(input1_match.value) > 0;
        if (!matchBound) return { valid: false, reason: "Match value is not within bounds" };
        const teamBound = parseFloat(input1_match.value) > 0;
        if (!teamBound) return { valid: false, reason: "Team value is not within bounds" };

        return { valid: true };

    } else if (pageIdx == 2) {

        
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
    
    let payload = {};
    

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