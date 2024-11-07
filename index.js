const htmlCodeEl = document.querySelector("#html");
const cssCodeEl = document.querySelector("#css");
const jsCodeEl = document.querySelector("#js");
const salidaEl = document.querySelector("#salida");

function run() {

    localStorage.setItem('htmlCodeEl', htmlCodeEl.value);
    localStorage.setItem('cssCodeEl', cssCodeEl.value);
    localStorage.setItem('jsCodeEl', jsCodeEl.value);

    salidaEl.contentDocument.body.innerHTML = `<style>${localStorage.cssCodeEl}</style>` + localStorage.htmlCodeEl;
    salidaEl.contentWindow.eval(localStorage.jsCodeEl);
}

// Si el usuario escribe algo en el elemento de código respectivo, se ejecuta automáticamente y se mostrará en la salida
htmlCodeEl.addEventListener("keyup",()=>{run()})
cssCodeEl.addEventListener("keyup",()=>{run()})
jsCodeEl.addEventListener("keyup",()=>{run()})

htmlCodeEl.value = localStorage.htmlCodeEl;
cssCodeEl.value = localStorage.cssCodeEl;
jsCodeEl.value = localStorage.jsCodeEl;
