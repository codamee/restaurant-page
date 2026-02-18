import "./about.css"
function about() {
    const contentDiv = document.querySelector("#content")
    contentDiv.innerHTML = ""
    let divElem = document.createElement("div")
    divElem.classList.add("about-bg")
    divElem.textContent = "This is the About content"
    contentDiv.append(divElem)
}
export { about }