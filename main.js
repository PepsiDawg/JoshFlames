let flames = 0;

function renderCount() {
    let totalDiv = document.querySelector('.counter-total');
    let dinImg = document.querySelector('#josh');
    let counterIcon = document.querySelector('.counter-icon');
    let container = document.querySelector('.container');
    let colors = [[128, 128, 255], [255, 255, 255], [255, 128, 128]];
    let maxDev = 20;
    let icons = ['🔥', '🧊', '😑'];
    totalDiv.innerHTML = flames;

    if (flames > 0) {
        dinImg.style['animation-duration'] = (1.0 / flames) + 's';
    } else if (flames < 0) {
        dinImg.style['animation-duration'] = (flames * -1 + 1) + 's';
    } else {
        dinImg.style['animation-duration'] = '0s';
    }

    if (flames < 0) {
        counterIcon.innerHTML = icons[1];
    } else if (flames > 0) {
        counterIcon.innerHTML = icons[0];
    } else {
        counterIcon.innerHTML = icons[2];
    }

    let perc = Math.abs(flames) >= maxDev ? 1 : (Math.abs(flames) / maxDev);
    let fc = 0, sc = 1;
    if (flames > 0) {
        fc = 2;
        sc = 1;
    }

    let color = [
        (colors[fc][0] * perc) + colors[sc][0] * (1 - perc),
        (colors[fc][1] * perc) + colors[sc][1] * (1 - perc),
        (colors[fc][2] * perc) + colors[sc][2] * (1 - perc),
    ]

    container.style.background = `rgb(${color[0]}, ${color[1]}, ${color[2]})`

}

function increase() {
    flames++;
    renderCount();

}

function decrease() {
    flames--;
    renderCount();
}

window.onload = renderCount;