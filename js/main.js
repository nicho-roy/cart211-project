import { saveState, loadState } from "./session-state.js"
import { Question } from "./Question.js"

//Tracked variables (not in session)
let state = loadState();
let secElapsed = 0; //sec
let lastMouseX = null;
let lastMouseY = null;

//timer loop
setInterval(() => {
    secElapsed++;
    console.log("sec", secElapsed);
}, 1000);



//add event listeners
document.addEventListener("mousemove",() => {
    
});



/**
 * Build questions
 * Runs after the page is loaded, for all that share the attribute
 * Avaiable attributes
 */
document.querySelectorAll("[question]").forEach(e => {
    const text = e.getAttribute("question-text"); 
    const type = e.getAttribute("question-type"); 
    Question.setupQuestion(e.id,type,text);
});

//save state when window leaving
window.addEventListener("pagehide", () => saveState(state)); 