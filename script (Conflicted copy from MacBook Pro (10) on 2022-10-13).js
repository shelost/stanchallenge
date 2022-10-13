let bars = document.getElementById('bars'),
    nav = document.getElementById('nav')

bars.onclick = () => {
    bars.classList.toggle('x')
    nav.classList.toggle('active')
}


// Set the date we're counting down to
var countDownDate = new Date("Oct 31, 2022 11:59:59").getTime();

let update = () => {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('d').innerHTML = days
    document.getElementById('h').innerHTML = hours
    document.getElementById('m').innerHTML = minutes
    document.getElementById('s').innerHTML = seconds
}

update()

var x = setInterval(function() {


    update()
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);