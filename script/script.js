let canvas = document.querySelector("#canvas");
let stuff = document.querySelector("html");
let context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.fillStyle = "black";
context.fillRect(0, 0, canvas.width, canvas.height)
canvas.addEventListener("mousemove", e => {
    context.fillStyle = "#5102fc";
    context.beginPath();
    context.arc(e.offsetX, e.offsetY, 25, 0, Math.PI * 2, false);
    context.fill();
})