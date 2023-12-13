// Description: This file contains the router function and the render component functions.
import * as api from "./script-components/api.js";
import * as canvas from "./script-components/canvas.js";
import * as timer from "./script-components/timer.js";
import * as imgGallery from "./script-components/imgGallery.js";
import * as answer from "./script-components/conditions.js";

// Router function // the rendering-order of the different pages
function setPage(pageId) {
    let pages = document.querySelectorAll(".page");
    for (let page of pages) {
        page.classList.remove("page--visible");
    }
    if (pageId === "welcomePage") {
        renderWelcomePage();
    } else if (pageId === "instructionsPage") {
        renderInstructionsPage();
    } else if (pageId === "animalPage") {
        renderRandAnimalPage();
    } else if (pageId === "gamePage") {
        renderGamePage();
    } else if (pageId === "inputPage") {
        renderInputPage();
    }
}
// Render component functions // Describes the content of the different pages
// Rendering of the first page
function renderWelcomePage() {
    let welcomePage = document.querySelector("#welcomePage");
    welcomePage.classList.add("page--visible");

    let nextBtnEl = welcomePage.querySelector(".btn__next-page");
    nextBtnEl.addEventListener("click", function () {
        setPage("instructionsPage");
    });
}
// Rendering of the second page
function renderInstructionsPage() {
    let instructionsPage = document.querySelector("#instructionsPage");
    instructionsPage.classList.add("page--visible");

    let nextBtnEl = instructionsPage.querySelector(".btn__next-page");
    nextBtnEl.addEventListener("click", function () {
        setPage("animalPage");
    });
}
// Rendering of the third page
function renderRandAnimalPage() {
    let animalPage = document.querySelector("#animalPage");
    animalPage.classList.add("page--visible");
    api.loadAnimal();

    let nextBtnEl = animalPage.querySelector(".btn__next-page");
    nextBtnEl.addEventListener("click", function () {
        setPage("gamePage");
    });
}
// Rendering of the fourth page
function renderGamePage() {
    let gamePage = document.querySelector("#gamePage");
    gamePage.classList.add("page--visible");

    canvas.initCanvas();

    timer.initTimer(handleTimerEnd);
    function handleTimerEnd() {
        imgGallery.saveCanvasToLocalStorage();
        setPage("inputPage");
    }
}
// Rendering of the fifth page
function renderInputPage() {
    let inputPage = document.querySelector("#inputPage"); // The page is hidden
    inputPage.classList.add("page--visible"); // The page is visible

    imgGallery.displayCanvasImg(); // The canvas image is displayed
    inputPage.classList.add("page--content-positioning"); // The content on this page is positioned using grid on big screens

    const submitGuessBtn = document.querySelector(".btn__submit-guess"); //

    // The user's guess is checked for validity
    submitGuessBtn.addEventListener("click", function () {
        const userInput = document.querySelector(".input");
        const userGuess = userInput.value.toLowerCase();
        const lettersInAlphabet = /^[a-z]+$/;

        // If the user's guess is valid, the input field is hidden and the conditions are displayed
        if (lettersInAlphabet.test(userGuess)) {
            const inputContent = document.querySelector(".input__content");
            const conditionsEl = document.querySelector(".conditions");

            inputContent.classList.add("input__content--hidden");
            conditionsEl.classList.add("condition--visible");

            answer.initAnswer();
            imgGallery.initImgGallery();

            // If the user's guess is invalid, the input field is cleared
        } else {
            userInput.value = "";
        }
    });
}

// The play again button is clicked
const playAgainBtn = document.querySelector(".btn__play-again");
playAgainBtn.addEventListener("click", function () {
    location.reload();
});

// Initial rendering // The page is loaded
renderWelcomePage();
imgGallery.initImgGallery();
