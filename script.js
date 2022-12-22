let url = 'https://www.cbr-xml-daily.ru/daily_json.js'
let $elementUSD = document.querySelector('.element__USD')
let $elementSEK = document.querySelector('.element__SEK')
let $elementTRY = document.querySelector('.element__TRY')
let $elementCNY = document.querySelector('.element__CNY')
let $elementEUR = document.querySelector('.element__EUR')
let $elementKGS = document.querySelector('.element__KGS')
let $elementCZK = document.querySelector('.element__CZK')
let $elementKZT = document.querySelector('.element__KZT')
let $elementUZS = document.querySelector('.element__UZS')




fetch(url).then(function(result) {
    return result.json()
}).then(function(data) {
    console.log(data)
    courses.USD = data.Valute.USD
    courses.RUB = data.Valute.RUB
    courses.SEK = data.Valute.SEK
    courses.TRY = data.Valute.TRY
    courses.CNY = data.Valute.CNY
    courses.EUR = data.Valute.EUR
    courses.KGS = data.Valute.KGS
    courses.CZK = data.Valute.CZK
    courses.KZT = data.Valute.KZT
    courses.UZS = data.Valute.UZS

    $elementUSD.textContent = courses.USD.Value.toFixed(2);
    $elementSEK.textContent = courses.SEK.Value.toFixed(2);
    $elementTRY.textContent = courses.TRY.Value.toFixed(2);
    $elementCNY.textContent = courses.CNY.Value.toFixed(2);
    $elementEUR.textContent = courses.EUR.Value.toFixed(2);
    $elementKGS.textContent = courses.KGS.Value.toFixed(2);
    $elementCZK.textContent = courses.CZK.Value.toFixed(2);
    $elementKZT.textContent = courses.KZT.Value.toFixed(2);
    $elementUZS.textContent = courses.UZS.Value.toFixed(2);    
});

let courses = {}

