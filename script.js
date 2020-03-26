const now = new Date()
const day = new Date(2021, 2, 20, 8)

if (now >= day) {
    items = document.getElementsByClassName("sn")
    do {
        items[0].classList.remove("sn")
    } while (items.length > 0)
}
