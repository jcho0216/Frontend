let eyesFunc = function(selector) {
    let eyes = document.querySelector(selector),
    eyeBall = eyes.querySelector('.눈동자'),
    eyeArea = eyes.getBoundingClientRect();

    let scrollEyes = function(mouseX, mouseY) {
        let radian = Math.atan2(mouseY - (eyeArea.y + eyeArea.height * 0.5), mouseX - (eyeArea.x + eyeArea.width * 0.5) );
        eyeBall.style.transform = 'rotate(' + (180 * radian / Math.PI - 90) + 'deg)';
    };

    return {
        scrollEyes: scrollEyes
    };
};

let eye2 = eyesFunc('.눈-2');
let eye1 = eyesFunc('.눈-1');

window.addEventListener('mousemove', function(e) {
    eye2.scrollEyes(e.pageX, e.pageY);
    eye1.scrollEyes(e.pageX, e.pageY);
});

