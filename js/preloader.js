const greetings = [
    "नमस्ते",
    "Hello",
    "你好",
    "Bonjour",
    "안녕하세요",
    "Hola",
    "こんにちは",
    "Ciao",
    "Hallo",
    "Olá"
];

const greeting = document.getElementById("greeting");
const preloader = document.getElementById("preloader");
const page = document.getElementById("page-content");

let index = 0;

function showGreeting() {

    greeting.classList.remove("show");

    setTimeout(() => {

        greeting.textContent = greetings[index];
        greeting.classList.add("show");

        index++;

        if (index < greetings.length) {
            setTimeout(showGreeting, 550);
        } else {

            setTimeout(() => {

                preloader.style.opacity = "0";

                page.style.opacity = "1";

                setTimeout(() => {

                    preloader.remove();

                }, 700);

            }, 700);

        }

    }, 250);
}

window.addEventListener("load", () => {
    showGreeting();
});