document.querySelector("button.expand").addEventListener("click", () => {
    document.querySelector("aside").classList.toggle("expanded")
})

window.addEventListener("click", (e) => {
    if (!e.path.includes(document.querySelector("aside")))
        document.querySelector("aside").classList.remove("expanded")
})