document.getElementsByClassName("rocket")[0].addEventListener("click", addFly);

function addFly() {
    var rocket = document.getElementsByClassName("rocket-body");
    rocket[0].classList.add("fly");
}
