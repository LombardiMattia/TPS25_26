//CONTROLLO CLICK NAVBAR
const navbar = document.getElementById("navbar");
let prev = null;
navbar.addEventListener("click", (e) => {
    if (e.target.id) {
        if(prev != null) {
            prev.classList.remove("clicked");
        }
        prev = e.target;
        e.target.classList.add("clicked");
    }
});

