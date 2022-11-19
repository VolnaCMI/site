let en = {
    "menu": `<menu>
        <div class="menu-element"><a href="/ru">Main</a></div>
        <div class="menu-element"><a href="/ru/news">News</a></div>
        <div class="menu-icon"><a href="/ru"><img src="../assets/imgs/favicon.ico" class="icon"></a></div>
        <div class="menu-element"><a href="/ru/country">Countries</a></div>
        <div class="menu-element"><a href="/ru/about">About</a></div>
    </menu>`,
    "footer": `<footer>
        <div class="links">
            <div class="vk"><a href="vk.com/volna_cmi">VK</a></div>
            <div class="about"><a href="/ru/about">About</a></div>
        </div>
        <div class="icon"><img src="../assets/imgs/favicon.ico" alt="icon"></div> 
    </footer>`
}

let ru = {
    "menu": `<menu>
        <div class="menu-element"><a href="/ru">Главная</a></div>
        <div class="menu-element"><a href="/ru/news">Новости</a></div>
        <div class="menu-icon"><a href="/ru"><img src="../assets/imgs/favicon.ico" class="icon"></a></div>
        <div class="menu-element"><a href="/ru/country">Страны</a></div>
        <div class="menu-element"><a href="/ru/about">О Волне</a></div>
    </menu>`,
    "footer": `<footer>
        <div class="links">
            <div class="vk"><a href="vk.com/volna_cmi">VK</a></div>
            <div class="about"><a href="/ru/about">О Волне</a></div>
        </div>
        <div class="icon"><img src="../assets/imgs/favicon.ico" alt="icon"></div> 
    </footer>`
}

window.onload = function() {
    let menu = document.querySelector("html").getAttribute("lang") == "ru" ? ru["menu"] : en["menu"];
    let footer = document.querySelector("html").getAttribute("lang") == "ru" ? ru["footer"] : en["footer"];

    document.querySelector("body").innerHTML = menu + document.querySelector("body").innerHTML + footer;
};