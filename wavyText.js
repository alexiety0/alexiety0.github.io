//made by oci :)
function initWavyText() {
    for (let j = 0; j < document.getElementsByClassName("wavy").length; j++) {
        let span = document.getElementsByClassName("wavy")[j];
        let text = span.innerHTML;
        span.innerHTML = "";

        for (let i = 0; i < text.length; i++) {
            let el = document.createElement('span');
            el.innerHTML = text.charAt(i);
            el.setAttribute("phase", i);
            span.appendChild(el)
        }
    }
}

initWavyText();

let time = 0;
let period = 2;

function anim() {
    if (period * time > 2 * Math.PI) {
        time = 0;
    }
    for (let j = 0; j < document.getElementsByClassName("wavy").length; j++) {

        let wavyText = document.getElementsByClassName("wavy")[j];
        let amplitude = wavyText.getAttribute("ampl") || 2; //2 is default
        for (let i = 0; i < wavyText.children.length; i++) {
            let el = wavyText.children[i];
            let phase = el.getAttribute("phase");

            let offsety = amplitude * Math.sin(period * time + phase / 2)
            let offsetx = -amplitude * Math.cos(period * time + phase / 2)

            el.style.transform = `translate(${offsetx}px, ${offsety}px)`
        }

    }
    time += 6 / 100;
    window.requestAnimationFrame(anim);

}

window.requestAnimationFrame(anim);
