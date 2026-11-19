import {saveState, loadState} from "./session-state.js"

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




//other question types extend question
class Question {
    constructor(id) {
        this.id = id;
        this.container = document.getElementById(id)
        this.createButton();
    }

    static setupQuestion(id) {
        new Question(id);
    }

    createButton() {
        const btn = document.createElement("button");
        btn.id = this.id + "Btn";
        btn.textContent = "Button";
        btn.classList.add("questionBtn");
        btn.addEventListener("click", this.onClick);
        this.container.appendChild(btn)
    }

    onClick() {
        console.log("clicked");
    }
}

//runs after the page is loaded, for all that share the attribute
document.querySelectorAll("[question]").forEach(e => {
    Question.setupQuestion(e.id);
});

// document.querySelectorAll('[data-type="choice"]'); //ex for values of attributes

//save state when window leaving
window.addEventListener("pagehide", () => saveState(state)); 