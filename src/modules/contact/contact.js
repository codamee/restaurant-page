import "./contact.css"
function contact() {
    const contentDiv = document.querySelector("#content")
    contentDiv.innerHTML = ""
    let divElem = document.createElement("div")
    divElem.classList.add("contact-bg")
    divElem.textContent = "This is the Contact content"
    contentDiv.append(divElem)
}
export { contact }