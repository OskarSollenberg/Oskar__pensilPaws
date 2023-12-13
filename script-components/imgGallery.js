//description: This file contains the functions that save the canvas image to local storage and render the image gallery

let galleryItemList = [];
let objectInfo = {
    url: "",
    animal: "",
};

// function that saves the canvas image to local storage
export function saveCanvasToLocalStorage() {
    let canvasEl = document.querySelector("#canvas");
    let animal = document.querySelector("#randomAnimal").textContent;
    let currentCanvasUrl = canvasEl.toDataURL("image/png");

    objectInfo.url = currentCanvasUrl;
    objectInfo.animal = animal;
    galleryItemList.push(objectInfo);

    localStorage.setItem("galleryItemList", JSON.stringify(galleryItemList));
}

// function that renders the image gallery
export function initImgGallery() {
    function checkForPrevSavedCanvasImages() {
        if (localStorage.getItem("galleryItemList")) {
            galleryItemList = JSON.parse(
                localStorage.getItem("galleryItemList")
            );
        }
    }
    // function that renders the image gallery
    function renderImgGallery() {
        const galleryWrapper = document.querySelector(".gallery-grid-wrapper");
        galleryWrapper.innerHTML = "";

        for (let galleryItem of galleryItemList) {
            let galleryImg = document.createElement("img");
            let galleryText = document.createElement("p");
            let galleryContentWrapper = document.createElement("div");
            galleryContentWrapper.classList.add("gallery-grid-items");
            galleryImg.src = galleryItem.url;
            galleryText.textContent = galleryItem.animal;
            galleryWrapper.appendChild(galleryContentWrapper);
            galleryContentWrapper.appendChild(galleryImg);
            galleryContentWrapper.appendChild(galleryText);
        }
    }
    // function calls
    checkForPrevSavedCanvasImages();
    renderImgGallery();
}

// function that displays the canvas image on the input page
export function displayCanvasImg() {
    let userGuesscanvas = document.querySelector("#userGuesscanvas");
    galleryItemList = JSON.parse(localStorage.getItem("galleryItemList"));
    let currentCanvasUrl = galleryItemList[galleryItemList.length - 1].url;
    userGuesscanvas.src = currentCanvasUrl;
}
