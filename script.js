const now = new Date()
const day = new Date(2020, 2, 26, 8)

if (now >= day) {
    items = document.getElementsByClassName("sn")
    do {
        items[0].classList.remove("sn")
    } while (items.length > 0)
}
