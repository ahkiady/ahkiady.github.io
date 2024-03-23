function moveAround(e, x, y){
    let move = [
        {transform: "translate(0%)"},
        {transform: `translate(${x}px, ${y}px)`},
    ];
    let timing = {
        duration: 500,
        fill: "forwards",
    }
    let elem = document.querySelector(e);

    let animation = elem.animate(move, timing);
    elem.addEventListener("animationend", async (event) => {

        await animation.finished;

        animation.commitStyles();
    });
    return animation;
}

function scaleDown(e, sizeX, sizeY) {
    let scale = [
        {transform: "scale(100%, 100%"},
        {transform: `scale(${sizeX}, ${sizeY})`}
    ];
    let timing = {
        duration: 500,
        fill: "forwards",
    }
    let elem = document.querySelector(e);

    let animation = elem.animate(scale, timing);
    elem.addEventListener("animationend", async (event) => {

        await animation.finished;

        animation.commitStyles();
    });
    return animation;
}

function pictureMove() {
    scaleDown("#pfp", 0.75, 0.75);
    moveAround("#pfp", 0, 250);
    moveAround("#title", 0, 650);
}