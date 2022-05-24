const shareIcon = document.getElementById("share-icon");
    
const active = document.getElementById("active");
const shareIcon2  = document.getElementById("share-icon-2");

shareIcon.addEventListener("click", () => {
    active.classList.toggle("active-state");
})

shareIcon2.addEventListener("click", () => {
    active.classList.toggle("active-state");
});