import "./styles.css"
import { home } from "./modules/home/home.js"
import { contact } from "./modules/contact/contact.js"
import { about } from "./modules/about/about.js"
import { menu } from "./modules/menu/menu.js"

const nav = document.querySelector("nav")
home()
nav.addEventListener("click", (e) => {
    if (e.target.id === "home") {
        home()
    } else if (e.target.id === "contact") {
        contact()
    }
    else if (e.target.id === "about") {
        about()
    }
    else if (e.target.id==="menu") {
        menu()
    }
})
