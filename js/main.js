// import { saveState, loadState } from "./state.js"
// import { PATH } from "./path.js"

//Tracked variables (not in session)
let state = loadState();
console.log("state:",state);
let secElapsed = 0; //sec
let lastMouseX = null;
let lastMouseY = null;

//construct popups
const testPopup = new Popup({
    title: "Test",
    message: "testmessagfe",
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
        { label: "Visit", onClick: () => sweepiePopup.show() }
    ]
});
const sweepiePopup = new Popup({
    title: "Notice",
    message: { html: `<p>stay on track</p>` },
    buttons: [
        { label: "okay" },
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