//16 x 16 grid so multidimensional array I think

const boardContainer = document.querySelector("#boardContainer");
const clearButton = document.querySelector("#clearButton");
const colorSelector = document.querySelector("#colorSelector");

for (let i = 0; i < 16; i++){
    for (let j = 0; j < 32; j++){
        const box = document.createElement("div");
        box.classList.add("box");
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "blue";
        });
        boardContainer.appendChild(box);
    }
}

clearButton.addEventListener("click", () => {
    //grabbing all the boxes with the class "box"
    const allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach(box => {
        box.style.backgroundColor = "white";
    });
});

colorSelector.addEventListener("change", (event) => {
    //event object contains info about event that occured
    //gets value of the color picker
    const selectedColor = event.target.value;
    //Selects all elements with class box, adds to boxes in Nodelist
    const allBoxes = document.querySelectorAll(".box");
    //Iterate over each box in Nodelist. 
    //
    allBoxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = selectedColor;
        });
    });
});

