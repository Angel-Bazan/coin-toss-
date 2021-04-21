// const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require("node:constants");

document.querySelector('#count').addEventListener('click' , coinToss);

async function coinToss(){

  document.querySelector('h2').innerHTML = ''
  const res = await fetch('/api/flip')
  const data = await res.json()
  console.log(data.value)
  if (data.value == 1) {
    // heads += 1
    document.querySelector('h2').innerHTML = 'Heads'
    document.getElementById('coin_flip').src = "https://iili.io/qN84un.png"
} else {
    // tails += 1
    document.querySelector('h2').innerHTML = 'Tails'
    document.getElementById('coin_flip').src = "https://iili.io/qNS9wu.png"
    // document.getElementById('tails').innerHTML = Tails:${tails}
} 

  // var image = new Array("Head.png" , "Tails.png");
  // document.getElementById('coin_flip').src = `/images/${image[data]}`; 

}
