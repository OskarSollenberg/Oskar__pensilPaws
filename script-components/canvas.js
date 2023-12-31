// Canvas
const canvasEl = document.querySelector("#canvas"); // Canvas element
const context = canvasEl.getContext("2d"); // The content within the canvas
const rect = canvasEl.getBoundingClientRect(); // Size of the Canvas

// function that returns the canvas image url
export function getImageUrl() {
    return canvasEl.toDataURL("image/png");
}

// function that initializes the canvas
export function initCanvas() {
    let isDrawing = false;
    let lastXPos = 0;
    let lastYPos = 0;

    // function that fixes the canvas scaling
    function fixCanvasScaling() {
        context.scale(devicePixelRatio, devicePixelRatio);
        context.lineWidth = 2; // Set the line width to make it thicker
        context.strokeStyle = "#000"; // Set the line color to black
        context.lineJoin = "round"; // Round the corners when two lines meet
        context.lineCap = "round"; // Round the ends of the lines

        let heightRatio = 0.7; // The ratio of the canvas height to the canvas width
        canvasEl.height = canvasEl.width * heightRatio;
    }
    // function that draws the lines when the pointer is down on the canvas
    canvasEl.addEventListener("pointerdown", function (e) {
        isDrawing = true; // The user is drawing
        lastXPos = ((e.offsetX * canvasEl.width) / canvasEl.clientWidth) | 0; // The x position of the pointer
        lastYPos = ((e.offsetY * canvasEl.height) / canvasEl.clientHeight) | 0; // The y position of the pointer
        context.beginPath();
        context.moveTo(lastXPos, lastYPos); //
    });

    // function that draws the lines when the pointer is moving on the canvas
    canvasEl.addEventListener("pointermove", function (e) {
        if (isDrawing) {
            const x = ((e.offsetX * canvasEl.width) / canvasEl.clientWidth) | 0;
            const y =
                ((e.offsetY * canvasEl.height) / canvasEl.clientHeight) | 0;
            context.quadraticCurveTo(
                lastXPos,
                lastYPos,
                (lastXPos + x) / 2,
                (lastYPos + y) / 2
            );
            lastXPos = x;
            lastYPos = y;
            context.stroke();
        }
    });
    // function that stops the drawing when the pointer is up from the canvas
    canvasEl.addEventListener("pointerup", function () {
        if (isDrawing) {
            context.lineTo(lastXPos, lastYPos);
            context.stroke();
            context.closePath();
            isDrawing = false;
        }
    });

    fixCanvasScaling();
}
