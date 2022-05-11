//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  // const word = document.querySelector('input').value
  const url = `https://coronavirus.m.pipedream.net/`

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data)

      document.querySelector('h2').innerText = `yes, it's bad!`

      document.querySelector(
        '#cases'
      ).innerText = `Total Global Confirmed Cases As Of Today: ${data.summaryStats.global.confirmed}`

      document.querySelector(
        '#deaths'
      ).innerText = `Total Global Deaths As Of Today: ${data.summaryStats.global.deaths}`

      // document.querySelector('h3').innerText =
      //   data[0].meanings[0].definitions[0].definition
    })
    .catch((err) => {
      console.log(`error ${err}`)
    })
}
