
//other question types extend question
export class Question {
    constructor(id,type,text) {
        this.id = id;
        this.type = type; //todon
        this.text = text;
        this.container = document.getElementById(id)
        this.createQuestionText();
        this.createButton();
    }

    static setupQuestion(id) {
        new Question(id);
    }

    createQuestionText() {
        const text = document.createElement("p");
        text.id = this.id + "Text";
        text.textContent = this.text;
        text.classList.add("questionText");
        this.container.appendChild(text)
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