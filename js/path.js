//find root for script, since github pages breaks links
const BASE = new URL("../", document.currentScript.src).pathname;

const PATH = {
    home: BASE + "/index.html",
    survey: {
        1: BASE + "/pages/survey1",
        2: BASE + "/pages/survey2"
    }
}