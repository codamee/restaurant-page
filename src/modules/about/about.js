import "./about.css"
import cheff from "../home/alexas_fotos-pizza-2661982.png"
function about() {
    const contentDiv = document.querySelector("#content")
    contentDiv.innerHTML = ""
    let divElem = document.createElement("div")
    divElem.classList.add("about-container")
    
    divElem.innerHTML = /*html*/ `
        <section class="about-hero">
            <h1>Our Story</h1>
            <p class="tagline">Where Tradition Meets the Future</p>
        </section>

        <section class="story-content">
            <div class="story-text">
                <h2>A Wooden Spoon & A Vision</h2>
                <p>Mini Restaurent started in a small family kitchen, where the rhythm of chopping and the aroma of simmering sauces were the backdrop of our lives...</p>
                <p>Today, we bring that same heart to your table, elevated by modern techniques and the finest local ingredients.</p>
            </div>
            <div class="story-image">
                <img src="${cheff}" alt="Our Chef at work">
            </div>
        </section>
    `;
    contentDiv.append(divElem)
}
export { about }