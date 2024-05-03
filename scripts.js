const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyValueSelect = document.querySelector(".currency-value-select")


function convertValues() {
    const inputValueEntry = document.querySelector(".input-value-entry").value
    const currencyValueConvert = document.querySelector(".currency-value-to-convert")
    const convertedcurrencyValue = document.querySelector(".currency-value-converted")

    const dolarToday = 5.20
    const euroToday = 5.40
    const libraToday = 6.40
    const bitcoinToday = 304219.55
    const realToday = 0.00
    const dolarEuro = 0.93
    const dolarLibra = 0.80
    const dolarReal = 0.20
    const dolarBitcoin = 59331.70
    const euroDolar = 0.93
    const euroLibra = 1.17
    const euroReal = 0.18
    const euroBitcoin = 55190.22
    const libraDolar = 0.80
    const libraEuro = 0.86
    const libraReal = 0.16
    const libraBitcoin = 47173.21
    const bitcoinDolar = 0.000017
    const bitcoinEuro = 0.000018
    const bitcoinLibra = 0.000021
    const bitcoinReal = 0.0000033

    //DOLAR - 
    if (currencyValueSelect.value == "dolar-1" && currencySelect.value == "euro") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputValueEntry / dolarEuro)
    }

    if (currencyValueSelect.value == "dolar-1" && currencySelect.value == "libra") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
        }).format(inputValueEntry / dolarLibra)
    }
    if (currencyValueSelect.value == "dolar-1" && currencySelect.value == "bitcoin") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValueEntry / dolarBitcoin)
    }
    if (currencyValueSelect.value == "dolar-1" && currencySelect.value == "real") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputValueEntry / dolarReal)
    }

    // EURO

    if (currencyValueSelect.value == "euro-1" && currencySelect.value == "dolar") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "US$",
        }).format(inputValueEntry / euroDolar)

    }

    if (currencyValueSelect.value == "euro-1" && currencySelect.value == "libra") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
        }).format(inputValueEntry / euroLibra)

    }
    if (currencyValueSelect.value == "euro-1" && currencySelect.value == "bitcoin") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputValueEntry / euroBitcoin)

    }
    if (currencyValueSelect.value == "euro-1" && currencySelect.value == "real") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputValueEntry / euroReal)

    }

    //LIBRA
    if (currencyValueSelect.value == "libra-1" && currencySelect.value == "dolar") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "US$",
        }).format(inputValueEntry / libraDolar)

    }

    if (currencyValueSelect.value == "libra-1" && currencySelect.value == "euro") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputValueEntry / libraEuro)
    }
    if (currencyValueSelect.value == "libra-1" && currencySelect.value == "bitcoin") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
        }).format(inputValueEntry / libraBitcoin)
    }
    if (currencyValueSelect.value == "libra-1" && currencySelect.value == "real") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputValueEntry / libraReal)
    }
    //BITCOIN
    if (currencyValueSelect.value == "bitcoin-1" && currencySelect.value == "dolar") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "US$",
        }).format(inputValueEntry / bitcoinDolar)
    }

    if (currencyValueSelect.value == "bitcoin-1" && currencySelect.value == "euro") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputValueEntry / bitcoinEuro)
    }
    if (currencyValueSelect.value == "bitcoin-1" && currencySelect.value == "libra") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
        }).format(inputValueEntry / libraBitcoin)

    }
    if (currencyValueSelect.value == "bitcoin-1" && currencySelect.value == "real") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputValueEntry / bitcoinReal)

    }
    //REAL
    if (currencyValueSelect.value == "real-1" && currencySelect.value == "dolar") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "US$",
        }).format(inputValueEntry / dolarToday)

    }

    if (currencyValueSelect.value == "real-1" && currencySelect.value == "euro") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputValueEntry / euroToday)

    }
    if (currencyValueSelect.value == "real-1" && currencySelect.value == "libra") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP",
        }).format(inputValueEntry / libraToday)

    }
    if (currencyValueSelect.value == "real-1" && currencySelect.value == "bitcoin") {
        convertedcurrencyValue.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputValueEntry / bitcoinToday)

    }


    function formatCurrency() {

        switch (currencyValueSelect.value) {
            case 'dolar-1':
                currencyValueConvert.innerHTML = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                }).format(inputValueEntry);


                break;
            case 'real-1':
                currencyValueConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(inputValueEntry);
                break;
            case 'euro-1':
                currencyValueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                }).format(inputValueEntry);
                break;
            case 'libra-1':
                currencyValueConvert.innerHTML = new Intl.NumberFormat('en-UK', {
                    style: 'currency',
                    currency: 'GBP',
                }).format(inputValueEntry);
                break;
            case 'bitcoin-1':
                currencyValueConvert.innerHTML = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'BTC',
                }).format(inputValueEntry);
                break;
            case 'bitcoin-1':
                currencyValueConvert.innerHTML = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: '$',
                }).format(inputValueEntry);
                break;



            default:
                break;
        }
    }
    formatCurrency()


}

function currencychange() {
    const currencyName = document.querySelector(".currency-name")
    const currencyImg = document.querySelector(".USA-flag")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImg.src = "./assets/dolar.png"

    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Biticoin"
        currencyImg.src = "./assets/bitcoin.png"
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
    }

}

function currencychangeselect() {
    const currencyNameToConvert = document.querySelector(".currency-name-to-convert")
    const currencyImgToCovert = document.querySelector(".brasil-flag")

    if (currencyValueSelect.value == "dolar-1") {
        currencyNameToConvert.innerHTML = "Dolar Americano"
        currencyImgToCovert.src = "./assets/dolar.png"

    }
    if (currencyValueSelect.value == "euro-1") {
        currencyNameToConvert.innerHTML = "Euro"
        currencyImgToCovert.src = "./assets/euro.png"
    }
    if (currencyValueSelect.value == "libra-1") {
        currencyNameToConvert.innerHTML = "Libra Esterlina"
        currencyImgToCovert.src = "./assets/Libra.png"
    }
    if (currencyValueSelect.value == "bitcoin-1") {
        currencyNameToConvert.innerHTML = "Bitcoin"
        currencyImgToCovert.src = "./assets/bitcoin.png"
    }
    if (currencyValueSelect.value == "real-1") {
        currencyNameToConvert.innerHTML = "Real Brasileiro"
        currencyImgToCovert.src = "./assets/real.png"
    }


    convertValues()
}



currencyValueSelect.addEventListener("change", currencychangeselect)
currencySelect.addEventListener("change", currencychange)
convertButton.addEventListener("click", convertValues)