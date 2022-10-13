
let bars = document.getElementById('bars'),
    nav = document.getElementById('nav')

bars.onclick = () => {
    bars.classList.toggle('x')
    nav.classList.toggle('active')
}
