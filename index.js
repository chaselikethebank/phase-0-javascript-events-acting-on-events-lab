// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF8040";
dodger.style.bottom = "100px";

document.addEventListener("keydown", function (event) {
    console.log(event);
  });

  
document.addEventListener("keydown", function (event){})

function moveDodgerLeft() {
    // if (event.key === "ArrowLeft") {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
    dodger.style.left = `${left - 10}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
    moveDodgerLeft();
    }
});

function moveDodgerRight() {
            const rightNumbers = dodger.style.left.replace("px", "");
            const right = parseInt(rightNumbers, 10);
            if (right < 360) {
                dodger.style.left = `${right + 10}px`
            }
        }

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
})
