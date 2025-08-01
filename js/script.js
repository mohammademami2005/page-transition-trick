const menuItems = document.querySelectorAll("nav>ul>li")
const mysections = document.querySelectorAll("section>div")

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        menuItems.forEach((li)=>{
            li.querySelector("span").classList.remove("active")
        })
        let itemContent = item.firstChild.textContent.trim()
        let activeItem = item.querySelector("span")
        activeItem.classList.add("active")

        mysections.forEach((section) => {
            section.classList.remove("show")

            document.getElementById(itemContent).classList.add("show")
        })
    })
})

