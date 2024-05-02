const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputValueEntry = document.querySelector(".input-value-entry").value
    const currencyValueConvert = document.querySelector(".currency-value-to-convert")
    const convertedcurrencyValue = document.querySelector(".currency-value-converted")

    const dolarToday = 5.20
    const euroToday = 5.40
    const libraToday = 6.40
    const bitcoinToday = 304219.55

    if (currencySelect.value == "dolar") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValueEntry / dolarToday)
    }
    if (currencySelect.value == "euro") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValueEntry / euroToday)
    }
    if (currencySelect.value == "libra") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputValueEntry / libraToday)
    }
    if (currencySelect.value == "bitcoin") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValueEntry / libraToday)

    currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValueEntry)


}}

function currencychange (){
    const currencyName = document.querySelector(".currency-name")
    const currencyImg = document.querySelector(".USA-flag")

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML="Dolar Americano"
        currencyImg.src="./assets/dolar.png"

    }
    if (currencySelect.value == "euro"){
        currencyName.innerHTML="Euro"
        currencyImg.src="./assets/euro.png"
    }
    if (currencySelect.value == "libra"){
        currencyName.innerHTML="Libra"
        currencyImg.src="./assets/libra.png"
    }
    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML="Biticoin"
        currencyImg.src="./assets/bitcoin.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", currencychange)
convertButton.addEventListener("click", convertValues)
