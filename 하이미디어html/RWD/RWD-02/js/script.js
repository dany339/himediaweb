const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const mobilenMenu = document.querySelector(".mobile-menu");

btnMenu.addEventListener("click", () => {
    mobilenMenu.classList.add("active");
});

// 대상.classList.remove('클래스명')
btnClose.addEventListener("click", () => {
    mobilenMenu.classList.remove("active");
});
