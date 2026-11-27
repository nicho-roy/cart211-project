// import { saveState, loadState } from "./state.js"
// import { PATH } from "./path.js"

//TODON minesweeper pog face

//Tracked variables (not in session)
let state = loadState();
console.log("state:",state);
let secElapsed = 0; //sec
let lastMouseX = null;
let lastMouseY = null;

const SmileyMood = Object.freeze({
    HAPPY: "../../images/smiley-happy.gif",
    CONTENT: "../../images/smiley-content.png",
    NEUTRAL: "../../images/smiley-neutral.png",
    WEIRD: "../../images/smiley-weird.png",
});
let smileyMood = SmileyMood.HAPPY;

//construct popups
const testPopup = new Popup({
    title: "Test",
    message: "test message",
    buttons: [
        { label: "okay" },
        { label: "next", onClick: () => location.href = PATH.survey[2] }
    ]
});
const adPopup = new Popup({
    title: "Advert",
    message: { html: `<img src="../../images/virus.gif" alt="advert">` },
    buttons: [
        { label: "close" },
        { label: "Visit", onClick: () => { stayOnTrackPopup.show(); setSmileyMood(SmileyMood.NEUTRAL) } }
    ]
});
const stayOnTrackPopup = new Popup({
    title: "Notice",
    message: { html: `<p>stay on track</p>` },
    buttons: [
        { label: "okay" , onClick: () => setSmileyMood(SmileyMood.HAPPY) },
    ]
});
const finishSurveyPopup = new Popup({
    title: "Notice",
    message: { html: `<b>Please answer all quetions before continuing</b>` },
    buttons: [
        { label: "okay", onClick: () => setSmileyMood(SmileyMood.HAPPY) },
    ]
});

//timer loop
setInterval(() => {
    secElapsed++;
    if (secElapsed == 1) {
        adPopup.show();
    }

}, 1000);




//ADD EVENT LISTENERS
document.addEventListener("mousemove",() => {
    
});







//FUNCT
function setSmileyMood(mood) {
    smileyMood = mood;
    document.getElementById("smiley").src = mood;
}

function saveAnswersToSession() {
    const answers = getAnswers();
    state.answers = {...state.answers, ...answers}; //merge state answers and answers
    saveState(state)
}

function getAnswers() {
    const answers = {};
    document.querySelectorAll("[question-answer]").forEach(e => {
        answers[e.id] = (e.type === "checkbox") ? e.checked : e.value;
    });
    return answers;
}







// window.addEventListener("pagehide", () => { saveAnswersToState() }); 