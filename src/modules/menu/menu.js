import "./menu.css"
import food from "../../assets/indraprojects-drink-9743627.jpg"
function menu() {
    const contentDiv = document.querySelector("#content")
    contentDiv.innerHTML = ""
    let divElem = document.createElement("div")
    divElem.classList.add("menuContainer")
    divElem.innerHTML =/*html*/
        `
    <div class="starters itemContainer">
    <p>Starters</p>
    <div class="cardContainer">
        <div class="card">
            <img src="https://plus.unsplash.com/premium_photo-1667807521010-5a3210f2ab7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJhbmNpbml8ZW58MHwxfDB8fHww" alt="" />
            <div class="itemInfo">
                <div class="name">Truffle Arancini</div>
                <div class="price">$12</div>
            </div>
        </div>

        <div class="card">
            <img src="https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FsYWR8ZW58MHwxfDB8fHww" alt="" />
            <div class="itemInfo">
                <div class="name">Burrata & Heirloom Tomato</div>
                <div class="price">$10</div>
            </div>
        </div>


        <div class="card">
            <img src="https://plus.unsplash.com/premium_photo-1670740967011-86730910a2e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FsYW1hcml8ZW58MHwxfDB8fHww" alt="" />
            <div class="itemInfo">
                <div class="name">Crispy Calamari</div>
                <div class="price">$13</div>
            </div>
        </div>

        <div class="card">
            <img src="https://images.unsplash.com/photo-1619810815691-4766cd4b8054?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJhd25zfGVufDB8MXwwfHx8MA%3D%3D" alt="" />
            <div class="itemInfo">
                <div class="name">Garlic Butter Prawns</div>
                <div class="price">$15</div>
            </div>
        </div>
    </div>
    </div>


        <div class="starters itemContainer">
    <p>Main Dish</p>
    <div class="cardContainer">
        <div class="card">
            <img src="https://images.unsplash.com/photo-1712334562767-5d366d0c40d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FsbW9ufGVufDB8MXwwfHx8MA%3D%3D" alt="salmon" />
            <div class="itemInfo">
                <div class="name">Pan-Seared Salmon</div>
                <div class="price">$25</div>
            </div>
        </div>

        <div class="card">
            <img src="https://images.unsplash.com/photo-1633436375795-12b3b339712f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RlYWt8ZW58MHwxfDB8fHww" alt="steak" />
            <div class="itemInfo">
                <div class="name">Ribeye Steak</div>
                <div class="price">$34</div>
            </div>
        </div>


        <div class="card">
            <img src="https://images.unsplash.com/photo-1680404840959-3211731fbb52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJpc290dG98ZW58MHwxfDB8fHww" alt="risotto" />
            <div class="itemInfo">
                <div class="name">Wild Mushroom Risotto</div>
                <div class="price">$28</div>
            </div>
        </div>

        <div class="card">
            <img src="https://images.unsplash.com/photo-1654722487269-29469154bf82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYiUyMGZvb2R8ZW58MHwxfDB8fHww" alt="" />
            <div class="itemInfo">
                <div class="name">Braised Lamb Shank</div>
                <div class="price">$30</div>
            </div>
        </div>
    </div>
    </div>

    <div class="starters itemContainer">
    <p>Specials</p>
    <div class="cardContainer">
        <div class="card">
            <img src="https://images.unsplash.com/photo-1707995546408-9815c70dd5c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvYnN0ZXJ8ZW58MHwxfDB8fHww" alt="Chef's Signature Lobster" />
            <div class="itemInfo">
                <div class="name">Chef's Signature Lobster</div>
                <div class="price">$45</div>
            </div>
        </div>

        <div class="card">
            <img src="https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8MXwwfHx8MA%3D%3D" alt="Wagyu Beef Burger" />
            <div class="itemInfo">
                <div class="name">Wagyu Beef Burger</div>
                <div class="price">$30</div>
            </div>
        </div>


        <div class="card">
            <img src="https://plus.unsplash.com/premium_photo-1669261881254-e9b79e9baae3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VhZm9vZC1wYXN0YXxlbnwwfDF8MHx8fDA%3D" alt="Black Ink Seafood Pasta" />
            <div class="itemInfo">
                <div class="name">Black Ink Seafood Pasta</div>
                <div class="price">$35</div>
            </div>
        </div>

        <div class="card">
            <img src="https://images.unsplash.com/photo-1760504526047-69dcd554e14a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1Y2slMjBmb29kfGVufDB8MXwwfHx8MA%3D%3D" alt="Slow-Roasted Peking Duck" />
            <div class="itemInfo">
                <div class="name">Slow-Roasted Peking Duck</div>
                <div class="price">$32</div>
            </div>
        </div>
    </div>
    </div>
    `



    
    contentDiv.append(divElem)
}
export { menu }