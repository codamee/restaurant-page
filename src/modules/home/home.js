import "./home.css"
function home() {
    const contentDiv = document.querySelector("#content")
    contentDiv.innerHTML = ""
    let divElem = document.createElement("div")
    divElem.classList.add("home-bg")
    divElem.textContent = "This is the Home content"
    contentDiv.append(divElem)
}
export { home }