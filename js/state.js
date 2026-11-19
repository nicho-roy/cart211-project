const KEY = "surveyState";

const defaultState = {
    mouseDistance: 0,
    totalTimeIdle: 0,
    wordsPerMin: 0,
    surveyStart: Date.now(),
    answers: {
    },
};

function saveState(state) {
    sessionStorage.setItem(KEY, JSON.stringify(state));
    console.log(state);
}

function loadState() {
    const sessionState = sessionStorage.getItem(KEY);
    return (sessionState) ? JSON.parse(sessionState) : {...defaultState}; //returns a copy of defaultState if not exists
}
