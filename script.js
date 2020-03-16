const now = new Date()
const day = new Date(2021, 2, 16, 16)

if (now >= day) {
    items = document.getElementsByClassName("sn")
    do {
        items[0].classList.remove("sn")
    } while (items.length > 0)
}
