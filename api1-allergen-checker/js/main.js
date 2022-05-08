document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  // to use for testing so don't have to enter bar code each time:
  // const barCode = '737628064502'
  const barCode = document.querySelector('input').value.toLowerCase()
  const url = `https://world.openfoodfacts.org/api/v0/product/${barCode}.json`

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data)
      document.querySelector('#productName').innerText =
        data.product.generic_name
      document.querySelector('img').src = data.product.image_url

      let allergenType = removeEn(data.product.allergens_from_ingredients)

      console.log(allergenType)

      document.querySelector('#allergens').innerText = allergenType
      document.querySelector('#caution').innerText =
        'Please be careful, this may not be an exhaustive list!'
    })
    .catch((err) => {
      console.log(`error ${err}`)
    })
}

//helper function to remove the 'en:' that precedes the string name of the allergy i need for some irritating reason, abbreviation for english i suppose? also to capitalize.
function removeEn(allergenWithEn) {
  if (allergenWithEn === '') {
    return 'none'
  } else {
    return allergenWithEn.replace('en:', '').toUpperCase()
  }
}
