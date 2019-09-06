let keyMainInput = document.querySelector("div.mainInput")
let keyOverlay = document.querySelector("div.overlay")

function adjustInputHeight() {
    let maxHeight = keyOverlay.getBoundingClientRect().height - 28

    keyMainInput.style.minHeight = `${maxHeight}px`
}

addEventListener("resize", () => {
    adjustInputHeight()
})

adjustInputHeight()