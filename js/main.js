// import { saveState, loadState } from "./state.js"
// import { PATH } from "./path.js"

//Tracked variables (not in session)
let state = loadState();
console.log("state:",state);
let secElapsed = 0; //sec
let lastMouseX = null;
let lastMouseY = null;

//timer loop
setInterval(() => {
    secElapsed++;
    // console.log("sec", secElapsed);
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