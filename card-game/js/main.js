let deckId = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data)
    deckId = data.deck_id
    // console.log(deckId)
  })
  .catch((err) => {
    console.log(`error ${err}`)
  })

document.querySelector('button').addEventListener('click', draw)

function draw() {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data)
      document.querySelector('#Player1').src = data.cards[0].image
      document.querySelector('#Player2').src = data.cards[1].image
      let player1CardVal = numFromFaceCards(data.cards[0].value)
      let player2CardVal = numFromFaceCards(data.cards[1].value)
      if (player1CardVal > player2CardVal) {
        document.querySelector('#result').innerText =
          'Player One is the Winnnnnnnnnnerrrrrr!!!'
      } else if (player2CardVal > player1CardVal) {
        document.querySelector('#result').innerText =
          'Player Two is the Winnnnnnnnnnerrrrrr!!!'
      } else {
        document.querySelector('#result').innerText = 'it is time for war!!'
      }
    })
    .catch((err) => {
      console.log(`error ${err}`)
    })
}

function numFromFaceCards(val) {
  if (val === 'ACE') {
    return 14
  } else if (val === 'KING') {
    return 13
  } else if (val === 'QUEEN') {
    return 12
  } else if (val === 'KING') {
    return 11
  } else {
    return Number(val)
  }
}
