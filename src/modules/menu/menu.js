import "./menu.css"
function menu() {
    const contentDiv = document.querySelector("#content")
    contentDiv.innerHTML = ""
    let divElem = document.createElement("div")
    divElem.classList.add("menu-bg")
    divElem.textContent = "This is the Menu content"
    contentDiv.append(divElem)
}
export { menu }