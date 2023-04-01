const button = document.getElementById("play-button");

button.onclick = function () {
    const isPaused = button.classList.contains("pause");
    if (isPaused) {
        button.classList.remove("pause");
    } else {
        button.classList.add("pause");
        setTimeout(() => {
            button.classList.remove("pause");
        }, 10000);
    }
};
